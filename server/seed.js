
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Client = require('./models/Client');
const Invoice = require('./models/Invoice');
const User = require('./models/User');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Client.deleteMany();
    await Invoice.deleteMany();
    await User.deleteMany();

    await User.create({ email: 'user@example.com', plan: 'free' });
    console.log('Default user created.');

    const createdClients = await Client.insertMany([
        { name: 'Tech Innovators Inc.', email: 'contact@techinnovators.com', address: '123 Tech Park, Silicon Valley, CA 94025' },
        { name: 'Creative Solutions LLC', email: 'support@creativesolutions.com', address: '456 Design Ave, Arts District, NY 10013' },
        { name: 'GreenScape Landscaping', email: 'office@greenscape.com', address: '789 Garden St, Boulder, CO 80302' },
        { name: 'Quantum Consultants', email: 'info@quantumconsult.com', address: '101 Research Blvd, Cambridge, MA 02139' },
    ]);

    const sampleInvoices = [
      // Invoices for Tech Innovators
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 1}`,
        client: createdClients[0]._id,
        invoiceDate: new Date('2024-05-15'),
        dueDate: new Date('2024-06-14'),
        lineItems: [{ description: 'Q2 Web Development Retainer', quantity: 1, rate: 5000 }],
        currency: 'USD',
        status: 'paid',
        notes: 'Thank you for your business.',
        signature: ''
      },
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 2}`,
        client: createdClients[0]._id,
        invoiceDate: new Date('2024-06-20'),
        dueDate: new Date('2024-07-20'),
        lineItems: [{ description: 'API Integration Project', quantity: 1, rate: 7500 }],
        taxRate: 9.5,
        tax: 712.5,
        currency: 'USD',
        status: 'pending',
        notes: 'Thank you for your business.',
        signature: ''
      },
       {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 8}`,
        client: createdClients[0]._id,
        invoiceDate: new Date('2024-03-01'),
        dueDate: new Date('2024-03-31'),
        lineItems: [{ description: 'Emergency Server Maintenance', quantity: 5, rate: 150 }],
        currency: 'USD',
        status: 'overdue',
        notes: 'Payment is overdue.',
        signature: ''
      },
      // Invoices for Creative Solutions
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 3}`,
        client: createdClients[1]._id,
        invoiceDate: new Date('2024-04-10'),
        dueDate: new Date('2024-05-10'),
        lineItems: [{ description: 'Brand Logo Design', quantity: 1, rate: 1200 }, { description: 'Business Card Design', quantity: 1, rate: 300 }],
        currency: 'USD',
        status: 'paid',
        notes: 'Thank you for your business.',
        signature: ''
      },
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 4}`,
        client: createdClients[1]._id,
        invoiceDate: new Date('2024-06-05'),
        dueDate: new Date('2024-07-05'),
        lineItems: [{ description: 'Marketing Brochure', quantity: 1, rate: 800 }],
        currency: 'USD',
        status: 'pending',
        notes: 'Thank you for your business.',
        signature: ''
      },
      // Invoices for GreenScape
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 5}`,
        client: createdClients[2]._id,
        invoiceDate: new Date('2024-06-01'),
        dueDate: new Date('2024-07-01'),
        lineItems: [{ description: 'Monthly Garden Maintenance', quantity: 1, rate: 450 }],
        currency: 'USD',
        status: 'pending',
        notes: 'Thank you for your business.',
        signature: ''
      },
      // Invoices for Quantum Consultants
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 6}`,
        client: createdClients[3]._id,
        invoiceDate: new Date('2024-02-28'),
        dueDate: new Date('2024-03-29'),
        lineItems: [{ description: 'Financial Modeling', quantity: 20, rate: 250 }],
        taxRate: 7.0,
        tax: 350.0,
        currency: 'USD',
        status: 'overdue',
        notes: 'Payment is overdue.',
        signature: ''
      },
      {
        invoiceNumber: `INV-${Date.now().toString().slice(-6) + 7}`,
        client: createdClients[3]._id,
        invoiceDate: new Date('2024-05-30'),
        dueDate: new Date('2024-06-29'),
        lineItems: [{ description: 'Market Research Report', quantity: 1, rate: 3200 }],
        currency: 'USD',
        status: 'paid',
        notes: 'Thank you for your business.',
        signature: ''
      },
    ];

    const processedInvoices = sampleInvoices.map(invoice => {
        const subtotal = invoice.lineItems.reduce((acc, item) => acc + (item.quantity * item.rate), 0);
        const tax = invoice.tax || 0;
        const total = subtotal + tax;
        return {
            ...invoice,
            subtotal,
            total,
        };
    });

    await Invoice.insertMany(processedInvoices);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Client.deleteMany();
    await Invoice.deleteMany();
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  deleteData();
} else {
  importData();
}
