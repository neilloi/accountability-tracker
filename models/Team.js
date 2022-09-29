const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    weekStart: {
        type: String,
        required: true,
    },
})