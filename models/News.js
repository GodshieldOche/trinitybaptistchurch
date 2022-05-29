import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    action: {
        type: String,
    },
    imageUrl: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    body: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }, 
    updatedAt: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.models.News || mongoose.model('News', newsSchema);