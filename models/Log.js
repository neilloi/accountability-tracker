const mongoose = require('mongoose')

const LogSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true;
    },
    userGoal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    dateComplete: {
        type: Date,
        required: true,
    },
})