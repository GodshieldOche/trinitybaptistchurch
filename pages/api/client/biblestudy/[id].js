import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getBibleStudyDetails } from '../../../../controllers/bibleStudyController'

const handler = nc({ onError })

dbConnect()

handler.get(getBibleStudyDetails)

export default handler