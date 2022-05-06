import BibleStudy from '../models/BibleStudy';
import Minister from '../models/Ministers'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"


// create BibleStudy
// post =>  /api/admin/BibleStudy
const createBibleStudy = asyncHandler(async (req, res, next) => {

    const bibleStudy = await BibleStudy.create(req.body)

    res.status(200).json({
        success: "true",
        message: "BibleStudy created successfully",
    })

})


// get BibleStudy
// get =>  /api/admin/BibleStudy
const getAdminBibleStudies = asyncHandler(async (req, res, next) => {

    const bibleStudies = await BibleStudy.find({}).populate({
        path: 'preacher',
        select: "name",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        bibleStudies
    })

})


// Delete BibleStudy
// Delete => api/admin/BibleStudy/:id
const deleteBibleStudy = asyncHandler(async (req, res, next) => {

    const bibleStudy = await BibleStudy.findById(req.query.id)

    if (!bibleStudy) {
        return next(new ErrorHandler('BibleStudy not found with this ID', 404))
    } else {
        if (bibleStudy.imageUrl.public_id) {
            await cloudinary.v2.uploader.destroy(bibleStudy.imageUrl.public_id)
        }

        await bibleStudy.remove()
        res.status(200).json({
            success: "true",
            message: "BibleStudy Deleted"
        })
    }
})


// get bibleStudy
// get => api/bibleStudys/:id
const getBibleStudy = asyncHandler(async (req, res, next) => {

    const bibleStudy = await BibleStudy.findById(req.query.id).populate({
        path: 'preacher',
        select: "name",
        model: Minister
    })

    if (!bibleStudy) {
        return next(new ErrorHandler('BibleStudy not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            bibleStudy
        })
    }
})


// update bibleStudy
// put => api/bibleStudy/:id
const updateBibleStudy = asyncHandler(async (req, res, next) => {
    const bibleStudy = await BibleStudy.findById(req.query.id)

    if (!bibleStudy) {
        return next(new ErrorHandler('BibleStudy not found with this ID', 404))
    } else {
        const { title, topic, preacher, book, chapter, verse, date,
            description, imageUrl, audioUrl, youtubeLink } = req.body

        bibleStudy.title = title
        bibleStudy.topic = topic
        bibleStudy.preacher = preacher
        bibleStudy.book = book
        bibleStudy.chapter = chapter
        bibleStudy.verse = verse
        bibleStudy.date = date
        bibleStudy.description = description
        bibleStudy.audioUrl = audioUrl
        bibleStudy.youtubeLink = youtubeLink

        if (imageUrl && imageUrl.public_id) {
            if (bibleStudy.imageUrl && bibleStudy.imageUrl.public_id && bibleStudy.imageUrl.public_id !== imageUrl.public_id) {
                await cloudinary.v2.uploader.destroy(bibleStudy.imageUrl.public_id)
                bibleStudy.imageUrl = imageUrl
            } else {
                bibleStudy.imageUrl = imageUrl
            }

        }

        await bibleStudy.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
})






export {
    createBibleStudy,
    getAdminBibleStudies,
    deleteBibleStudy,
    getBibleStudy,
    updateBibleStudy
}