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

    const {keyword} = req.query

    const page = Number(req.query.page) || 1

    const query = {
        $or: [
            {title: { $regex: keyword, $options: "i" }},
            {topic: { $regex: keyword, $options: "i" }},
            {description: { $regex: keyword, $options: "i" }},
            {book: { $regex: keyword, $options: "i" }},
        ]
    }

    const nestedQuery = {
        "sermons": {
            $elemMatch: {
                $or: [
                    { title: { $regex: keyword, $options: "i" } },
                    { topic: { $regex: keyword, $options: "i" } },
                    { description: { $regex: keyword, $options: "i" } },
                    { book: { $regex: keyword, $options: "i" } },
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
    if (sermons.length > 0) { 
        all.push(...sermons)
    }

    // BibleStudies
    const bibleStudies = await BibleStudy.find(query).sort('-date').populate({
        path: 'preacher',
        select: "name imageUrl",
        model: Minister
    })

    if (bibleStudies.length > 0) {
        all.push(...bibleStudies)
    }

    const conferences = await Conference.find(nestedQuery).sort("-startDate").populate({
        path: 'sermons.preacher',
        select: "name imageUrl",
        model: Minister
    })

    conferences.map(conference => {
        const sermons = conference.sermons.map((sermon, index) => {
           
            return {
                title: sermon.title,
                topic: sermon.topic,
                book: sermon.book,
                chapter: sermon.chapter,
                verse: sermon.verse,
                preacher: sermon.preacher,
                conferenceId: conference._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id,
                index
            }
           
        })
        
        sermons.map(sermon => {
            if (
                sermon.title.includes(keyword.toLowerCase())
                || sermon.topic.includes(keyword.toLowerCase())
                || sermon.description.includes(keyword.toLowerCase())
                || sermon.book.includes(keyword.toLowerCase())
            ) { 
                all.push(sermon)
            }
        })     
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
                topic: sermon.topic,
                book: sermon.book,
                chapter: sermon.chapter,
                verse: sermon.verse,
                preacher: sermon.preacher,
                seriesId: serie._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id,
                index
            }
        })

        sermons.map(sermon => {
            if (
                sermon.title.includes(keyword.toLowerCase())
                || sermon.topic.includes(keyword.toLowerCase())
                || sermon.description.includes(keyword.toLowerCase())
                || sermon.book.includes(keyword.toLowerCase())
            ) {
                all.push(sermon)
            }
        })  
    })


    all.sort((a, b) => new Date(b.date) - new Date(a.date))

    const resPerPage = 3
    const totalItems = all.length

    const start = (page - 1) * resPerPage
    const end = page * resPerPage

    res.status(200).json({
        success: "true",
        all: all.slice(start, end),
        totalItems,
        resPerPage
    })

})




export {
    getLatestResources,
    searchAllResources
}