import Sermon from '../models/Sermon'
import Minister from '../models/Ministers'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// get client sermons
// get => /api/client/sermons
const getSermons = asyncHandler(async (req, res, next) => {

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
        query.topic = {$regex: topic, $options: 'i'}
    }
    if (preacher) {
        query.preacher = preacher
    }
    if (scripture) { 
        query.book = {$regex: scripture, $options: 'i'}
    }

    const totalItems = await Sermon.countDocuments(query)
    const sermons = await Sermon.find(query).sort(sortQuery).skip((page - 1) * resPerPage).limit(resPerPage).populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        sermons,
        totalItems,
        resPerPage
    })

})


// get client sermons
// get => /api/client/sermons
const getSermonFilters = asyncHandler(async (req, res, next) => {

    const sermons = await Sermon.find({}).sort('-date').populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })

    let dt = []
    let dp = []
    let ds = []
    sermons.map(sermon => {
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


// get client sermon detail
// get => /api/client/sermon/:id
const getSermonDetails = asyncHandler(async (req, res, next) => {

    const sermon = await Sermon.findById(req.query.id).populate({
        path: 'preacher',
        select: "name about imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        sermon
    })

})

// create sermon
// post =>  /api/admin/sermons
const createSermon = asyncHandler(async (req, res, next) => {

    const sermon = await Sermon.create(req.body)

    res.status(200).json({
        success: "true",
        message: "Sermon created successfully",
    })

}) 


// get sermon
// get =>  /api/admin/sermons
const getAdminSermons = asyncHandler(async (req, res, next) => {

    const sermons = await Sermon.find({}).sort({ date: -1 }).populate({
        path: 'preacher',
        select: "name",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        sermons
    })

}) 


// Delete sermon
// Delete => api/admin/sermon/:id
const deleteSermon = asyncHandler(async (req, res, next) => {
    
    const sermon = await Sermon.findById(req.query.id)

    if (!sermon) {
        return next(new ErrorHandler('Sermon not found with this ID', 404))
    } else {
        if (sermon.imageUrl.public_id) {
            await cloudinary.v2.uploader.destroy(sermon.imageUrl.public_id)
        }

        await sermon.remove()
        res.status(200).json({
            success: "true",
            message: "sermon Deleted"
        })
    }
}) 


// get Sermon
// get => api/sermons/:id
const getSermon = asyncHandler(async (req, res, next) => {

    const sermon = await Sermon.findById(req.query.id).populate({
        path: 'preacher',
        select: "name",
        model: Minister
    })

    if (!sermon) {
        return next(new ErrorHandler('Sermon not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            sermon
        })
    }
}) 


// update Sermon
// put => api/sermons/:id
const updateSermon = asyncHandler(async (req, res, next) => {
    const sermon = await Sermon.findById(req.query.id)

    if (!sermon) {
        return next(new ErrorHandler('Sermon not found with this ID', 404))
    } else {
        const { title, category, topic, preacher, book, chapter, verse, date,
            description, imageUrl, audioUrl, youtubeLink } = req.body

        sermon.title = title
        sermon.category = category
        sermon.topic = topic
        sermon.preacher = preacher
        sermon.book = book
        sermon.chapter = chapter
        sermon.verse = verse
        sermon.date = date
        sermon.description = description
        sermon.audioUrl = audioUrl
        sermon.youtubeLink = youtubeLink

        if (imageUrl && imageUrl.public_id) {
            if (sermon.imageUrl && sermon.imageUrl.public_id && sermon.imageUrl.public_id !== imageUrl.public_id) {
                await cloudinary.v2.uploader.destroy(sermon.imageUrl.public_id)
                sermon.imageUrl = imageUrl
            } else {
                sermon.imageUrl = imageUrl
            }

        } else {
            sermon.imageUrl = imageUrl
        }

        await sermon.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
}) 






export {
    createSermon,
    getAdminSermons,
    deleteSermon,
    getSermon,
    updateSermon,
    getSermons,
    getSermonDetails,
    getSermonFilters
}