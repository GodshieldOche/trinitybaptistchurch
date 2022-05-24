import Service from '../models/Service'
import asyncHandler from "express-async-handler";
import cloudinary from "cloudinary"
import ErrorHandler from "../middleware/errorHandler"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


// get client services
// get => /api/client/services
const getServices = asyncHandler(async (req, res) => {

    const allServices = await Service.find({}).sort('date')

    const services = allServices.filter(service => new Date(service.endTime) > new Date())


    res.status(200).json({
        success: "true",
        services,
    })

})



// create Service
// post =>  /api/admin/services
const createService = asyncHandler(async (req, res, next) => {
    
    const service = await Service.create(req.body)

    service.save()
    console.log(req.body)

    res.status(200).json({
        success: "true",
        message: "Service created successfully",
    })

}) 


// get service
// get =>  /api/admin/service
const getAdminService = asyncHandler(async (req, res, next) => {

    const services = await Service.find({})

    res.status(200).json({
        success: "true",
        services
    })

}) 


// Delete Service
// Delete => api/admin/Service/:id
const deleteService = asyncHandler(async (req, res, next) => {

    const service = await Service.findById(req.query.id)

    if (!service) {
        return next(new ErrorHandler('Service not found with this ID', 404))
    } else {

        if (service.imageUrl.public_id) {
            await cloudinary.v2.uploader.destroy(service.imageUrl.public_id)
        }
        await service.remove()
        res.status(200).json({
            success: "true",
            message: "Service Deleted"
        })
    }
}) 



// get service
// get => api/service/:id
const getService = asyncHandler(async (req, res, next) => {

    const service = await Service.findById(req.query.id)

    if (!service) {
        return next(new ErrorHandler('Service not found with this ID', 404))
    } else {

        res.status(200).json({
            success: "true",
            service
        })
    }
}) 




// update Service
// put => api/service/:id
const updateService = asyncHandler(async (req, res, next) => {
    const selected = await Service.findById(req.query.id)
    const { service, startDate, endDate, topic, imageUrl, bulletin } = req.body

    if (!selected) {
        return next(new ErrorHandler('Service not found with this ID', 404))
    } else {
        selected.service = service
        selected.startDate = startDate
        selected.endDate = endDate
        selected.topic = topic
        selected.bulletin = bulletin
        

        if (imageUrl && imageUrl.public_id) {
            if (selected.imageUrl.public_id !== imageUrl.public_id) {
                await cloudinary.v2.uploader.destroy(selected.imageUrl.public_id)
                selected.imageUrl = imageUrl
            } 
        }

        await selected.save({ validateBeforeSave: false })


        res.status(200).json({
            success: "true",
        })
    }
})

export {
    createService,
    getAdminService,
    deleteService,
    getService,
    updateService,
    getServices
}