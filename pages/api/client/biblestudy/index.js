import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getBibleStudies } from '../../../../controllers/bibleStudyController'

const handler = nc({ onError })

dbConnect()

handler.get(getBibleStudies)

export default handler