import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { createSeries, deleteSeriesSermon, getAdminSeries, seriesSermons } from '../../../../controllers/seriesController'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createSeries)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(seriesSermons)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminSeries)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteSeriesSermon)

export default handler