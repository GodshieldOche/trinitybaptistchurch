import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getConferenceFilters } from '../../../../controllers/conferenceController'

const handler = nc({ onError })

dbConnect()

handler.get(getConferenceFilters)

export default handler
