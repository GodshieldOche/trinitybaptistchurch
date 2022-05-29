import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists']
    },
    date: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.models.Email || mongoose.model('Email', emailSchema);