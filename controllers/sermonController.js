import Sermon from '../models/Sermon'


// create sermon
// post =>  /api/admin/sermons
const createSermon = async (req, res, next) => {
    try {
        const sermon = await Sermon.create(req.body)

        res.status(200).json({
            success: "true",
            message: "Sermon created successfully",
        })
    } catch (error) {
        next(error)
    }
    

}



export {
    createSermon
}