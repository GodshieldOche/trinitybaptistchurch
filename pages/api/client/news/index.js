import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getClientNews } from '../../../../controllers/newsController'

const handler = nc({ onError })

dbConnect()

handler.get(getClientNews)

export default handler