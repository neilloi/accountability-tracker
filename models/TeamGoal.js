const mongoose = require('mongoose')

const TeamGoalSchema = new mongoose.Schema({
    teamId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    goal: {
        type: String,
        required: true,
    },
})