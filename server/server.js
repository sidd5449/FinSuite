
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { handleWebhook } = require('./controllers/stripeController');
const { protect } = require('./middleware/auth');
const userRoutes = require('./routes/userRoutes');
const { signupUser } = require('./controllers/userController');

// Load env vars
dotenv.config();

connectDB();

const app = express();

// Stripe webhook needs the raw body, so it must be configured before express.json()
app.post('/api/stripe/webhook', express.raw({type: 'application/json'}), handleWebhook);

// Body parser for other routes
app.use(express.json());

// Enable CORS
app.use(cors());

// --- Unprotected Routes ---
app.post('/api/users/signup', signupUser);


// --- Protected Routes ---
app.use('/api/invoices', protect, require('./routes/invoiceRoutes'));
app.use('/echo',(req, res) =>{res.json({message: 'Hello from the server!'});}); 
app.use('/api/clients', protect, require('./routes/clientRoutes'));
app.use('/api/payments', protect, require('./routes/paymentRoutes'));
app.use('/api/users', protect, userRoutes);
app.use('/api/subscriptions', protect, require('./routes/subscriptionRoutes'));

// Unprotected or manually protected routes
app.use('/api/stripe', protect, require('./routes/stripeRoutes'));


const PORT = process.env.API_PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
