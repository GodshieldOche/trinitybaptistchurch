import mongoose from 'mongoose'

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
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
    sessions: [
        {
            day: {
                type: String,
                required: true
            },
            topic: {
                type: String,
                required: true
            },
            preacher: {
                type: mongoose.Schema.ObjectId,
                required: true,
                ref: 'minister'
            },
            description: {
                type: String,
                required: true
            },
            startTime: {
                type: Date,
                required: true
            },
            endTime: {
                type: Date,
                required: true
            },
        }
    ]
})


export default mongoose.models.Event || mongoose.model('Event', eventSchema)