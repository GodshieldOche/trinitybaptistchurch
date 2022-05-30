import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getServices } from '../../../../controllers/errorMiddleware'

const handler = nc({ onError })

dbConnect()

handler.get(getServices)

export default handler