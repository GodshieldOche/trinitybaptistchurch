import mongoose from 'mongoose';

const bibleStudySchema = new mongoose.Schema({
    title: {
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

export default mongoose.models.BibleStudy || mongoose.model('BibleStudy', bibleStudySchema)