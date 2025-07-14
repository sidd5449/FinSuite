const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendEmail = async (mailOptions) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            ...mailOptions,
        });
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        // We re-throw the error to be handled by the caller if needed,
        // but for some flows we might want to catch it and just log.
        throw error;
    }
};

const getPaymentLink = (invoiceId) => {
    const baseUrl = process.env.APP_URL || 'http://localhost:9002';
    return `${baseUrl}/invoice/${invoiceId}`;
}

exports.sendInvoiceGeneratedEmail = async (invoice) => {
    const paymentLink = getPaymentLink(invoice.id);
    const mailOptions = {
        to: invoice.client.email,
        subject: `New Invoice ${invoice.invoiceNumber} from FinSuite`,
        html: `
            <h1>New Invoice</h1>
            <p>Dear ${invoice.client.name},</p>
            <p>A new invoice with number <strong>${invoice.invoiceNumber}</strong> for the amount of <strong>${invoice.currency} ${invoice.total.toFixed(2)}</strong> has been generated for you.</p>
            <p>The due date is ${new Date(invoice.dueDate).toLocaleDateString()}.</p>
            <p>You can view and pay your invoice online by clicking the button below:</p>
            <p style="text-align: center;"><a href="${paymentLink}" style="display: inline-block; padding: 12px 24px; font-size: 16px; color: #ffffff; background-color: #1a73e8; text-decoration: none; border-radius: 5px; font-family: sans-serif;">View and Pay Invoice</a></p>
            <p>Thank you for your business!</p>
            <p>Sincerely,<br>The FinSuite Team</p>
        `,
    };
    // We don't want to block the API response if email fails.
    sendEmail(mailOptions).catch(err => console.error("Caught error sending invoice email:", err));
};

exports.sendPaymentReminderEmail = async (invoice) => {
    const paymentLink = getPaymentLink(invoice.id);
    const mailOptions = {
        to: invoice.client.email,
        subject: `Reminder: Invoice ${invoice.invoiceNumber} is due`,
        html: `
            <h1>Payment Reminder</h1>
            <p>Dear ${invoice.client.name},</p>
            <p>This is a friendly reminder that invoice <strong>${invoice.invoiceNumber}</strong> for the amount of <strong>${invoice.currency} ${invoice.total.toFixed(2)}</strong> is due on ${new Date(invoice.dueDate).toLocaleDateString()}.</p>
            <p>You can view and pay your invoice online by clicking the button below:</p>
            <p style="text-align: center;"><a href="${paymentLink}" style="display: inline-block; padding: 12px 24px; font-size: 16px; color: #ffffff; background-color: #1a73e8; text-decoration: none; border-radius: 5px; font-family: sans-serif;">Pay Now</a></p>
            <p>If you have already made the payment, please disregard this email.</p>
            <p>Thank you,<br>The FinSuite Team</p>
        `,
    };
    await sendEmail(mailOptions);
};
