import User from "../models/User";


const register = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const user = await User.create({
            name,
            email,
            password
        })

        res.status(200).json({
            success: true,
            message: "registered User"
        })
    } catch (error) {
        next(error)
    }
}


const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.status(200).json({
            success: 'true',
            user
        })
    } catch (error) {
        next(error)
    }
}


export {
    register,
    currentUser
}