
const User = require('../models/User');

// @desc    Register a new user
// @route   POST /api/users/signup
exports.signupUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        
        // In a real app, you would hash the password here before saving
        const user = await User.create({
            email,
            // password: hashedPassword,
        });

        res.status(201).json({
            id: user._id,
            email: user.email,
        });

    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get current user's profile
// @route   GET /api/users/me
exports.getMe = async (req, res, next) => {
    // The 'protect' middleware attaches the user object to the request.
    // We can simply return it.
    res.status(200).json(req.user);
};

// @desc    Increment AI usage count for the current user
// @route   PUT /api/users/me/increment-ai
exports.incrementAiRequestCount = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            // This case should ideally not be hit if 'protect' middleware is working
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        
        user.aiRequestCount += 1;
        await user.save();
        
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
