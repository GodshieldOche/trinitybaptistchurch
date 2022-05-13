import Conference from '../models/Conference'
import Minister from '../models/Ministers'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"

// create conference
// post =>  /api/admin/conference
const createConference = asyncHandler(async (req, res, next) => {

    const conference = await Conference.create(req.body)

    res.status(200).json({
        success: "true",
        message: "Conference created successfully",
    })

})


// get Conference
// get =>  /api/admin/conference
const getAdminConferences = asyncHandler(async (req, res, next) => {

    const conferences = await Conference.find({}).populate({
        path: 'sermons.preacher',
        select: "name",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        conferences
    })

}) 


// Delete conference
// Delete => api/admin/conference/:id
const deleteConference = asyncHandler(async (req, res, next) => {

    const conference = await Conference.findById(req.query.id)

    if (!conference) {
        return next(new ErrorHandler('Conference not found with this ID', 404))
    } else {

        await cloudinary.v2.uploader.destroy(conference.imageUrl.public_id)

        conference.sermons.forEach(async (sermon) => {
            if (sermon.imageUrl?.public_id) {
                await cloudinary.v2.uploader.destroy(sermon.imageUrl?.public_id)
            }
        })

        await conference.remove()
        res.status(200).json({
            success: "true",
            message: "Conference Deleted"
        })
    }
}) 



// Delete conference sermon
// Delete => api/admin/conference/:id
const deleteConferenceSermon = asyncHandler(async (req, res, next) => {

    const { sermonId, id } = req.query

    const conference = await Conference.findById(id)

    if (!conference) {
        return next(new ErrorHandler('Conference not found with this ID', 404))
    } else {

        conference.sermons.forEach(async (sermon) => {
            if (sermon._id.toString() === sermonId.toString()) {
                if (sermon.imageUrl?.public_id) {
                    await cloudinary.v2.uploader.destroy(sermon.imageUrl?.public_id)
                }
            }
        })

        const updatedConferenceSermon = conference.sermons.filter(sermon => sermon._id.toString() !== sermonId.toString())

        conference.sermons = updatedConferenceSermon

        await conference.save()

        res.status(200).json({
            success: "true",
            message: "Conference Sermon Deleted"
        })
    }
}) 


// get conference
// get => api/conference/:id
const getConference = asyncHandler(async (req, res, next) => {

    const conference = await Conference.findById(req.query.id).populate({
        path: 'sermons.preacher',
        select: "name",
        model: Minister
    })

    if (!conference) {
        return next(new ErrorHandler('Conference not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            conference
        })
    }
})


// update conference sermons
// put => api/conference/:id
const conferenceSermons = asyncHandler(async (req, res, next) => {
    const conference = await Conference.findById(req.query.id)

    if (!conference) {
        return next(new ErrorHandler('Conference not found with this ID', 404))
    } else {
        const { title, category, topic, preacher, book, chapter, verse, date,
            description, imageUrl, audioUrl, youtubeLink } = req.body

        const sermon = {
            title, category, topic, preacher, book, chapter, verse, date,
            description, imageUrl, audioUrl, youtubeLink
        }

        conference.sermons.push(sermon)

        await conference.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
}) 


// update conference sermons
// put => api/conferences/:id
const updateConferenceSermon = asyncHandler(async (req, res, next) => {
    const { id, sermonId } = req.query
    const conference = await Conference.findById(id)
    const { title, category, topic, preacher, book, chapter, verse, date,
        description, imageUrl, audioUrl, youtubeLink } = req.body

    if (!conference) {
        return next(new ErrorHandler('Conference not found with this ID', 404))
    } else {

        conference.sermons.forEach(async (sermon) => {
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

        await conference.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
})

// update conference 
// put => api/conferences/:id
const updateConference = asyncHandler(async (req, res, next) => {
    const conference = await Conference.findById(req.query.id)

    if (!conference) {
        return next(new ErrorHandler('Conference not found with this ID', 404))
    } else {
        const { title, description, imageUrl, startDate, endDate } = req.body

        conference.title = title
        conference.description = description
        conference.startDate = startDate
        conference.endDate = endDate

        if (imageUrl && imageUrl?.public_id) {
            if (conference?.imageUrl?.public_id !== imageUrl.public_id) {
                await cloudinary.v2.uploader.destroy(conference.imageUrl.public_id)
                conference.imageUrl = imageUrl
            }
        }

        await conference.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
})










export {
    createConference,
    getAdminConferences,
    deleteConference,
    deleteConferenceSermon,
    getConference,
    conferenceSermons,
    updateConference,
    updateConferenceSermon
}