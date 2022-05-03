import Minister from '../models/Ministers'
import cloudinary from "cloudinary"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Create Minister
// post => api/ministers
const addMinister = async (req, res) => {
    const { name, about, role, imageUrl } = req.body

    try {
        const minister = await Minister.create({
            name,
            about,
            role,
            imageUrl
        })

        res.status(200).json({
            success: true,
            message: "Added new minister"
        })
    } catch (error) {
        next(error)
    }
}

// Get all Ministers
// get => api/ministers
const getMinisters = async (req, res) => {
    try {
        const ministers = await Minister.find()

        res.status(200).json({
            success: true,
            ministers
        })
    } catch (error) {
        next(error)
    }
}



// Delete Minister
// Delete => api/ministers/:id
const deleteMinister = async (req, res) => {
    try {
        const minister = await Minister.findById(req.query.id)

        if(!minister) {
             throw new Error('Order not found')
        } else {

            await cloudinary.v2.uploader.destroy(minister.imageUrl.public_id)

            await minister.remove()
            res.status(200).json({
            success: true,
            message: "minister Deleted"
            })
        } 
    } catch (error) {
        next(error)
    }
}






export {
    addMinister,
    getMinisters,
    deleteMinister
}