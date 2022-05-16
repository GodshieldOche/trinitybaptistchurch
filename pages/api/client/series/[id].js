import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getSeriesDetails } from '../../../../controllers/seriesController'

const handler = nc({ onError })

dbConnect()

handler.get(getSeriesDetails)

export default handler