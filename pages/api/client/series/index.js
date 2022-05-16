import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getClientSeries } from '../../../../controllers/seriesController'

const handler = nc({ onError })

dbConnect()

handler.get(getClientSeries)

export default handler