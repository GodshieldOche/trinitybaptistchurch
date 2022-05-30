import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getEventDetails } from '../../../../controllers/eventController'

const handler = nc({ onError })

dbConnect()

handler.get(getEventDetails)

export default handler