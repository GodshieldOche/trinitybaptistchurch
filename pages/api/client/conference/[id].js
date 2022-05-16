import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getConferenceDetails } from '../../../../controllers/conferenceController'

const handler = nc({ onError })

dbConnect()

handler.get(getConferenceDetails)

export default handler