import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name: String,
    track: {
        type: Map,
        of: String
    }
});

export const Habit = mongoose.model('Habit', habitSchema);

// module.exports = Habit;
