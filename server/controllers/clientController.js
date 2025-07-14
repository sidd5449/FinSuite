
const Client = require('../models/Client');

// @desc    Get all clients
// @route   GET /api/clients
exports.getClients = async (req, res, next) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Get single client
// @route   GET /api/clients/:id
exports.getClient = async (req, res, next) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Create new client
// @route   POST /api/clients
exports.createClient = async (req, res, next) => {
    try {
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Update client
// @route   PUT /api/clients/:id
exports.updateClient = async (req, res, next) => {
    try {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!client) {
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Delete client
// @route   DELETE /api/clients/:id
exports.deleteClient = async (req, res, next) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        await client.deleteOne();
        res.status(204).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

// @desc    Add a note to a client
// @route   POST /api/clients/:id/notes
exports.addClientNote = async (req, res, next) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ success: false, message: 'Client not found' });
        }
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ success: false, message: 'Note content is required' });
        }
        const newNote = { content, date: new Date() };
        client.notes.unshift(newNote); // Add to the beginning of the array to show newest first
        await client.save();
        const populatedClient = await Client.findById(req.params.id);
        res.status(201).json(populatedClient);
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};
