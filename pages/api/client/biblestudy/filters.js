import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getBibleStudyFilters } from '../../../../controllers/bibleStudyController'

const handler = nc({ onError })

dbConnect()

handler.get(getBibleStudyFilters)

export default handler
