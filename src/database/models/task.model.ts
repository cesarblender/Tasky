import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        min: 1,
        max: 100,
    },
    description: {
        type: String,
        min: 1,
        max: 500,
    }
});

export const task = mongoose.model('Task', TaskSchema);
