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
        const sermons = conference.sermons.map(sermon => { 
            
            return {
                title: sermon.title,
                preacher: sermon.preacher,
                conferenceId: conference._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id
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
        const sermons = serie.sermons.map(sermon => {

            return {
                title: sermon.title,
                preacher: sermon.preacher,
                seriesId: serie._id,
                date: sermon.date,
                description: sermon.description,
                _id: sermon._id
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


export {
    getLatestResources
}