import nc from 'next-connect'
import dbConnect from '../../utils/dbConnect'

const handler = nc()

handler.get((req, res, next) => {
    res.json({name: "john Doe ly"})
})

dbConnect()

export default handler