import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getSeriesFilters } from '../../../../controllers/seriesController'

const handler = nc({ onError })

dbConnect()

handler.get(getSeriesFilters)

export default handler
