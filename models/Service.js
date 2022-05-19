import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema({
    service: {
        type: String,
        required: true      
    },
    date: {
        type: Date,
        reuired: true
    },
    topic: {
        type: String,
        required: true
    },
    imageUrl: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    bulletin: {
        type: String,
    }
})


export default mongoose.models.Service || mongoose.model('Service', serviceSchema)