import Series from '../models/Series'
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
const getSeriesFilters = asyncHandler(async (req, res, next) => {

    const series = await Series.find({}).sort('-createdAt').populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    })

    let dt = []
    let dp = []
    let ds = []
    series.map(serie => {
        serie.sermons.map(sermon => {
            dt.push(sermon.topic)
            dp.push(sermon.preacher.name)
            ds.push(sermon.book)
        })
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


// get client series
// get => /api/client/series
const getClientSeries = asyncHandler(async (req, res, next) => {

    const { topic, preacher, scripture, sort } = req.query

    const page = Number(req.query.page) || 1
    const resPerPage = 10

    const query = {
        "sermons": { $elemMatch: { } }
    }

    let sortQuery = "-createdAt"

    if (sort) {
        sort === 'oldest' 
        ? sortQuery = 'createdAt' : sort === 'a-z'
        ? sortQuery = 'title' : sort === 'z-a'
        ? sortQuery = '-title' : sortQuery = '-createdAt'
    }

    if (topic) {
        query.sermons.$elemMatch.topic = { $regex: topic, $options: 'i' }
    }
    if (preacher) {
        query.sermons.$elemMatch.preacher = preacher
    }
    if (scripture) {
        query.sermons.$elemMatch.book = { $regex: scripture, $options: 'i' }
    }

    const totalItems = await Series.countDocuments(query)
    const series = await Series
        .find(query)
        .sort(sortQuery)
        .skip((page - 1) * resPerPage)
        .limit(resPerPage)
        .populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        series,
        totalItems,
        resPerPage
    })

})


// get client series detail
// get => /api/client/series/:id
const getSeriesDetails = asyncHandler(async (req, res, next) => {

    const series = await Series.findById(req.query.id).populate({
        path: 'sermons.preacher',
        select: "name about imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        series
    })

})


// create series
// post =>  /api/admin/series
const createSeries = asyncHandler(async (req, res, next) => {

    const series = await Series.create(req.body)

    res.status(200).json({
        success: "true",
        message: "Series created successfully",
    })

})

// get Series
// get =>  /api/admin/Series
const getAdminSeries = asyncHandler(async (req, res, next) => {

    const series = await Series.find({}).sort({ createdAt: -1 }).populate({
        path: 'sermons.preacher',
        select: "name",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        series
    })

}) 

// Delete Series
// Delete => api/admin/Series/:id
const deleteSeries = asyncHandler(async (req, res, next) => {

    const series = await Series.findById(req.query.id)

    if (!series) {
        return next(new ErrorHandler('Series not found with this ID', 404))
    } else {
        
        await cloudinary.v2.uploader.destroy(series.imageUrl.public_id)

        series.sermons.forEach( async (sermon) => {
            if (sermon.imageUrl?.public_id) { 
                await cloudinary.v2.uploader.destroy(sermon.imageUrl?.public_id)
            }
        })

        await series.remove()
        res.status(200).json({
            success: "true",
            message: "Series Deleted"
        })
    }
}) 


// Delete Series sermon
// Delete => api/admin/Series/:id
const deleteSeriesSermon = asyncHandler(async (req, res, next) => {

    const {sermonId, id} = req.query

    const series = await Series.findById(id)

    if (!series) {
        return next(new ErrorHandler('Series not found with this ID', 404))
    } else {

        series.sermons.forEach( async (sermon) => {
            if (sermon._id.toString() === sermonId.toString()) {
                if (sermon.imageUrl?.public_id) { 
                    await cloudinary.v2.uploader.destroy(sermon.imageUrl?.public_id)
                }
            }
        })

        const updatedSermonSeries = series.sermons.filter(sermon => sermon._id.toString() !== sermonId.toString())

        series.sermons = updatedSermonSeries

        await series.save()

        res.status(200).json({
            success: "true",
            message: "Series Sermon Deleted"
        })
    }
}) 


// get Series
// get => api/Series/:id
const getSeries = asyncHandler(async (req, res, next) => {

    const series = await Series.findById(req.query.id).populate({
        path: 'sermons.preacher',
        select: "name",
        model: Minister
    })

    if (!series) {
        return next(new ErrorHandler('Series not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            series
        })
    }
})

// update Series sermons
// put => api/Seriess/:id
const seriesSermons = asyncHandler(async (req, res, next) => {
    const series = await Series.findById(req.query.id)

    if (!series) {
        return next(new ErrorHandler('Series not found with this ID', 404))
    } else {
        const { title, category, topic, preacher, book, chapter, verse, date,
            description, imageUrl, audioUrl, youtubeLink } = req.body

        const sermon = {
            title, category, topic, preacher, book, chapter, verse, date,
            description, imageUrl, audioUrl, youtubeLink
        }

        series.sermons.push(sermon)

        await series.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
}) 

// update Series sermons
// put => api/Seriess/:id
const updateSeriesSermon = asyncHandler(async (req, res, next) => {
    const { id, sermonId } = req.query
    const series = await Series.findById(id)
    const { title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink } = req.body

    if (!series) {
        return next(new ErrorHandler('Series not found with this ID', 404))
    } else {
        
        series.sermons.forEach(async (sermon) => {
            if (sermon._id.toString() === sermonId.toString()) { 
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

                if (sermon?.imageUrl?.public_id !== imageUrl.public_id) { 
                    await cloudinary.v2.uploader.destroy(sermon.imageUrl.public_id)
                    sermon.imageUrl = imageUrl
                } else {
                    sermon.imageUrl = imageUrl
                }
            }
        })

        await series.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
}) 

// update Series 
// put => api/Seriess/:id
const updateSeries = asyncHandler(async (req, res, next) => {
    const series = await Series.findById(req.query.id)

    if (!series) {
        return next(new ErrorHandler('Series not found with this ID', 404))
    } else {
        const { title, description, imageUrl } = req.body

        series.title = title
        series.description = description

        if (imageUrl && imageUrl?.public_id) {
            if (series?.imageUrl?.public_id !== imageUrl.public_id) {
                await cloudinary.v2.uploader.destroy(series.imageUrl.public_id)
                series.imageUrl = imageUrl
            }
        }

        await series.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
}) 







export {
    createSeries,
    getAdminSeries,
    deleteSeries,
    getSeries,
    seriesSermons,
    updateSeries,
    updateSeriesSermon,
    deleteSeriesSermon,
    getClientSeries,
    getSeriesDetails,
    getSeriesFilters
}