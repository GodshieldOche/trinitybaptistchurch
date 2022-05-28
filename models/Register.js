import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
    conference: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'conference'
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email already exists']
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})



export default mongoose.models.Register || mongoose.model('Register', registerSchema);