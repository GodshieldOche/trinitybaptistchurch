import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getNewsDetails } from '../../../../controllers/newsController'

const handler = nc({ onError })

dbConnect()

handler.get(getNewsDetails)

export default handler