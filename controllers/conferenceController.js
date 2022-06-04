import Conference from '../models/Conference'
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
const getConferenceFilters = asyncHandler(async (req, res, next) => {

    const conferences = await Conference.find({}).sort('-startDate').populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    })

    let dt = []
    let dp = []
    let ds = []
    conferences.map(conference => {
        conference.sermons.map(sermon => {
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



// get client conference
// get => /api/client/conference
const getClientConference = asyncHandler(async (req, res, next) => {

    const { topic, preacher, scripture, sort } = req.query

    const page = Number(req.query.page) || 1
    const resPerPage = 10

    let sortQuery = "-startDate"

    if (sort) {
        sort === 'oldest' 
        ? sortQuery = 'startDate' : sort === 'a-z'
        ? sortQuery = 'title' : sort === 'z-a'
        ? sortQuery = '-title' : sortQuery = '-startDate'
    }

    const query = {
        "sermons": { $elemMatch: {} }
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

    const totalItems = await Conference.countDocuments(query)
    const conferences = await Conference
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
        conferences,
        totalItems,
        resPerPage
    })

})


// get client conference detail
// get => /api/client/conference/:id
const getConferenceDetails = asyncHandler(async (req, res, next) => {

    const conference = await Conference.findById(req.query.id).populate({
        path: 'sermons.preacher',
        select: "name about imageUrl",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        conference
    })

})




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

    const conferences = await Conference.find({}).sort({ date: -1 }).populate({
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
                        return sermon.imageUrl = imageUrl
                    } else {
                        return sermon.imageUrl = imageUrl
                    }
                } else {
                    return sermon.imageUrl = imageUrl
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
                return conference.imageUrl = imageUrl
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
    updateConferenceSermon,
    getConferenceDetails,
    getClientConference,
    getConferenceFilters
}