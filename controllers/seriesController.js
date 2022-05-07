import Series from '../models/Series'
import Minister from '../models/Ministers'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"

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

    const series = await Series.find({}).populate({
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

                if (imageUrl) {
                    if (sermon.imageUrl?.public_id && sermon.imageUrl.public_id !== imageUrl.public_id) { 
                        await cloudinary.v2.uploader.destroy(sermon.imageUrl.public_id)
                        sermon.imageUrl = imageUrl
                    } else {
                        sermon.imageUrl = imageUrl
                    }
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
    updateSeriesSermon
}