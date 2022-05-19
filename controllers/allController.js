import Sermon from '../models/Sermon'
import BibleStudy from '../models/BibleStudy';
import asyncHandler from "express-async-handler";
import Minister from '../models/Ministers'


// get client conference detail
// get => /api/client/conference/:id
const getLatestResources = asyncHandler(async (req, res, next) => {

    const all = []

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