import Sermon from '../models/Sermon'
import BibleStudy from '../models/BibleStudy';
import asyncHandler from "express-async-handler";
import Minister from '../models/Ministers';
import Series from '../models/Series';
import Conference from '../models/Conference';


// get client conference detail
// get => /api/client/conference/:id
const getLatestResources = asyncHandler(async (req, res, next) => {

    const all = []

    // sermons
    const sermons = await Sermon.find({}).sort({ date: -1 }).populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    }).limit(5)
    all.push(...sermons)

    const bibleStudies = await BibleStudy.find({}).sort({ date: -1 }).populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    }).limit(5)
    all.push(...bibleStudies)

    const conferences = await Conference.find({}).sort("-startDate").populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    }).limit(5)

    conferences.map(conference => {
        const sermons = conference.sermons.map((sermon, index) => { 
            
            return {
                title: sermon.title,
                preacher: sermon.preacher,
                conferenceId: conference._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id,
                index
            }
        })
        all.push(...sermons)
    })

    const series = await Series.find({}).sort("-startDate").populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    }).limit(5)

    series.map(serie => {
        const sermons = serie.sermons.map((sermon, index) => {

            return {
                title: sermon.title,
                preacher: sermon.preacher,
                seriesId: serie._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id,
                index
            }
        })
        all.push(...sermons)
    })

    
    all.sort((a, b) => new Date(b.date) - new Date(a.date))

    const latest = all.slice(0, 6)
    
    res.status(200).json({
        success: "true",
        latest
    })

})


// get client conference detail
// get => /api/client/conference/:id
const searchAllResources = asyncHandler(async (req, res, next) => {

    const keyword = 'heart'

    const query = {
        $or: [
            {
                title: { $regex: keyword, $options: "i" }
            },
            {
                topic: { $regex: keyword, $options: "i" }
            },
            {
                description: { $regex: keyword, $options: "i" }
            }
        ]
    }

    const nestedQuery = {
        "sermons": {
            $elemMatch: {
                $or: [
                    { title: { $regex: keyword, $options: "i" } },
                    { topic: { $regex: keyword, $options: "i" } },
                    { description: { $regex: keyword, $options: "i" } }
                ]
            }
        }
    }

    const all = []

    // sermons
    const sermons = await Sermon.find(query).sort('-date').populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })
    all.push(...sermons)

    // BibleStudies
    const bibleStudies = await BibleStudy.find(query).sort('-date').populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })
    all.push(...bibleStudies)

    const conferences = await Conference.find(nestedQuery).sort("-startDate").populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    })

    conferences.map(conference => {
        const sermons = conference.sermons.map((sermon, index) => {

            return {
                title: sermon.title,
                preacher: sermon.preacher,
                conferenceId: conference._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id,
                index
            }
        })
        all.push(...sermons)
    })

    const series = await Series.find(nestedQuery).sort("-startDate").populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    })

    series.map(serie => {
        const sermons = serie.sermons.map((sermon, index) => {

            return {
                title: sermon.title,
                preacher: sermon.preacher,
                seriesId: serie._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id,
                index
            }
        })
        all.push(...sermons)
    })


    all.sort((a, b) => new Date(b.date) - new Date(a.date))

    res.status(200).json({
        success: "true",
        all
    })

})




export {
    getLatestResources,
    searchAllResources
}