import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorMiddleware'
import { getSermonFilters } from '../../../../controllers/sermonController'

const handler = nc({ onError })

dbConnect()

handler.get(getSermonFilters)

export default handler
