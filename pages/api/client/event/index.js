import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getEvents } from '../../../../controllers/eventController'

const handler = nc({ onError })

dbConnect()

handler.get(getEvents)

export default handler