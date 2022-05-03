import mongoose from 'mongoose'

const ministerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    role: {
        type: String,
        default: 'minister'
    },
    about: {
        type: String,
        required: [true, "Please enter minister's about"]
    },
    imageUrl: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

export default mongoose.models.Minister || mongoose.model('Minister', ministerSchema)