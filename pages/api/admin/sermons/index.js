import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { createSermon, getAdminSermons } from '../../../../controllers/sermonController'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createSermon)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminSermons)

export default handler