import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getConferenceDetails } from '../../../../controllers/conferenceController'

const handler = nc({ onError })

dbConnect()

handler.get(getConferenceDetails)

export default handler