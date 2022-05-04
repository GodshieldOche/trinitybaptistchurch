import mongoose from "mongoose";

const sermonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
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
        ref: 'Minister'
    },
    book: {
        type: String,
        required: true
    },
    chapter: {
        type: String,
        required: true
    },
    verse: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
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
    audioUrl: {
        type: String,
        required: true
    },
    youtubeLink: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

export default mongoose.models.Sermon || mongoose.model('Sermon', sermonSchema)