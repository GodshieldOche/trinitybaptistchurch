import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { deleteSeries, getSeries, updateSeriesSermon, updateSeries } from '../../../../controllers/seriesController'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteSeries)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getSeries)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(updateSeriesSermon)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateSeries)

export default handler