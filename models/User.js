import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import validator from 'validator'


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [50, 'your name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minLength: [6, 'Your password must be longer than 6 characters']
    },
    role: {
        type: String,
        default: 'member'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})


userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

export default mongoose.models.User || mongoose.model('User', userSchema)