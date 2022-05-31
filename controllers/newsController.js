import News from '../models/News'
import User from '../models/User'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



// Get news details
// get =>  /api/admin/news
const getNewsDetails = asyncHandler(async (req, res, next) => {

    const news = await News.findById(req.query.id).sort('-updatedAt').populate({
        path: 'author',
        select: "name",
        model: User
    })

    if (!news) {
        return next(new ErrorHandler('News not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            news
        })
    }
})


// Get news details
// get =>  /api/admin/news
const getClientNews = asyncHandler(async (req, res, next) => {

    const news = await News.find({}).sort('-updatedAt').populate({
        path: 'author',
        select: "name",
        model: User
    })

    res.status(200).json({
        success: "true",
        news,
    })

})


// create news
// post =>  /api/admin/news
const createNews = asyncHandler(async (req, res, next) => {

    req.body.author = req.user._id
    
    const news = await News.create(req.body)

    res.status(200).json({
        success: "true",
        message: "News created successfully",
    })

})



// create news
// get =>  /api/admin/news
const getAdminNews = asyncHandler(async (req, res, next) => {

    const news = await News.find({}).sort('-updatedAt').populate({
        path: 'author',
        select: "name",
        model: User
    })

    res.status(200).json({
        success: "true",
        news,
    })

})


// Delete news
// Delete => api/admin/news/:id
const deleteNews = asyncHandler(async (req, res, next) => {

    const news = await News.findById(req.query.id)

    if (!news) {
        return next(new ErrorHandler('News not found with this ID', 404))
    } else {

        await cloudinary.v2.uploader.destroy(news.imageUrl.public_id)

        await news.remove()
        res.status(200).json({
            success: "true",
            message: "News Deleted"
        })
    }
})

// get News
// get => api/News/:id
const getNews = asyncHandler(async (req, res, next) => {

    const news = await News.findById(req.query.id)

    if (!news) {
        return next(new ErrorHandler('News not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            news
        })
    }
})


// update news
// put => api/newss/:id
const updateNews = asyncHandler(async (req, res, next) => {
    const news = await News.findById(req.query.id)

    if (!news) {
        return next(new ErrorHandler('news not found with this ID', 404))
    } else {
        const { title, action, body, imageUrl} = req.body

        news.title = title
        news.action = action
        news.body = body
        news.updatedAt = Date.now()

        if (news?.imageUrl?.public_id !== imageUrl.public_id) {
            await cloudinary.v2.uploader.destroy(news.imageUrl.public_id)
            news.imageUrl = imageUrl
        }

        await news.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
})

export {
    createNews,
    getAdminNews,
    deleteNews,
    getNews,
    updateNews,
    getClientNews,
    getNewsDetails
}