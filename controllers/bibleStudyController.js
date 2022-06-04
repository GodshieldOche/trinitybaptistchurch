import BibleStudy from '../models/BibleStudy';
import Minister from '../models/Ministers'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// get client bibleStudy
// get => /api/client/biblestudy
const getBibleStudies = asyncHandler(async (req, res, next) => {

    const { topic, preacher, scripture, sort } = req.query

    const page = Number(req.query.page) || 1
    const resPerPage = 10

    const query = {}

    let sortQuery = '-date'

    if (sort) {
        sort === 'oldest' 
        ? sortQuery = 'date' : sort === 'a-z'
        ? sortQuery = 'title' : sort === 'z-a'
        ? sortQuery = '-title' : sortQuery = '-date'
    }

    if (topic) {
        query.topic = { $regex: topic, $options: 'i' }
    }
    if (preacher) {
        query.preacher = preacher
    }
    if (scripture) {
        query.book = { $regex: scripture, $options: 'i' }
    }

    const totalItems = await BibleStudy.countDocuments(query)
    const bibleStudies = await BibleStudy
        .find(query)
        .sort(sortQuery)
        .skip((page - 1) * resPerPage)
        .limit(resPerPage)
        .populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        bibleStudies,
        totalItems,
        resPerPage
    })

})


// get client sermons
// get => /api/client/sermons
const getBibleStudyFilters = asyncHandler(async (req, res, next) => {

    const biblestudies = await BibleStudy.find({}).sort('-date').populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })

    let dt = []
    let dp = []
    let ds = []
    biblestudies.map(sermon => {
        dt.push(sermon.topic)
        dp.push(sermon.preacher.name)
        ds.push(sermon.book)
    })

    const topics = [...new Set(dt)]
    const preachers = [...new Set(dp)]
    const scriptures = [...new Set(ds)]

    res.status(200).json({
        success: "true",
        topics,
        preachers,
        scriptures
    })

})



// get client biblestudy detail
// get => /api/client/biblestudy/:id
const getBibleStudyDetails = asyncHandler(async (req, res, next) => {

    const bibleStudy = await BibleStudy.findById(req.query.id).populate({
        path: 'preacher',
        select: "name about imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        bibleStudy
    })

})


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

    const bibleStudies = await BibleStudy.find({}).sort({ date: -1 }).populate({
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
                return bibleStudy.imageUrl = imageUrl
            } else {
                return bibleStudy.imageUrl = imageUrl
            }

        } else {
            return bibleStudy.imageUrl = imageUrl
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
    updateBibleStudy,
    getBibleStudies,
    getBibleStudyDetails,
    getBibleStudyFilters
}