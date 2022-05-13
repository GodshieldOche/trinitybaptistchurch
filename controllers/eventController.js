import Event from '../models/Event'
import Minister from '../models/Ministers'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"

// create event
// post =>  /api/admin/event
const createEvent = asyncHandler(async (req, res, next) => {

    const event = await Event.create(req.body)

    res.status(200).json({
        success: "true",
        message: "Event created successfully",
    })

})


// get Event
// get =>  /api/admin/Event
const getAdminEvent = asyncHandler(async (req, res, next) => {

    const events = await Event.find({}).populate({
        path: 'sessions.preacher',
        select: "name",
        model: Minister
    })

    res.status(200).json({
        success: "true",
        events
    })

}) 



// Delete event
// Delete => api/admin/event/:id
const deleteEvent = asyncHandler(async (req, res, next) => {

    const event = await Event.findById(req.query.id)

    if (!event) {
        return next(new ErrorHandler('Event not found with this ID', 404))
    } else {
            
        await cloudinary.v2.uploader.destroy(event.imageUrl.public_id)

        await event.remove()
        res.status(200).json({
            success: "true",
            message: "event Deleted"
        })
    }
})

// get Event
// get => api/event/:id
const getEvent = asyncHandler(async (req, res, next) => {

    const event = await Event.findById(req.query.id).populate({
        path: 'sessions.preacher',
        select: "name",
        model: Minister
    })

    if (!event) {
        return next(new ErrorHandler('Event not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            event
        })
    }
}) 


// update Event
// put => api/events/:id
const updateEvent = asyncHandler(async (req, res, next) => {
    const event = await Event.findById(req.query.id)

    if (!event) {
        return next(new ErrorHandler('Event not found with this ID', 404))
    } else {
        const { title, type, description, startDate, endDate, imageUrl, sessions } = req.body

        event.title = title
        event.type = type
        event.description = description
        event.startDate = startDate
        event.endDate = endDate
        event.sessions = sessions

        if (event.imageUrl.public_id && event.imageUrl.public_id !== imageUrl.public_id) {
            await cloudinary.v2.uploader.destroy(event.imageUrl.public_id)
            event.imageUrl = imageUrl
        }

        await event.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
})



// Delete Event sermon
// Delete => api/admin/event/:id
const deleteEventSession = asyncHandler(async (req, res, next) => {

    const { sessionId, id } = req.query

    const event = await Event.findById(id)

    if (!event) {
        return next(new ErrorHandler('Event not found with this ID', 404))
    } else {

        
        const updatedEventSessions = event.sessions.filter(session => session._id.toString() !== sessionId.toString())

        event.sessions = updatedEventSessions

        await event.save()

        res.status(200).json({
            success: "true",
            message: "Event Session Deleted"
        })
    }
}) 




export {
    createEvent,
    getAdminEvent,
    deleteEvent,
    getEvent,
    updateEvent,
    deleteEventSession
}