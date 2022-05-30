import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getClientConference } from '../../../../controllers/conferenceController'

const handler = nc({ onError })

dbConnect()

handler.get(getClientConference)

export default handler