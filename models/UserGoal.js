const mongoose = require('mongoose')

const UserGoalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    teamGoal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userGoal: {
        type: String,
        required: true,
    },
    frequency: {
        type: String,
        required: true,
    },
})