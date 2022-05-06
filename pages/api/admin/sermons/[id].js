import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { deleteSermon, getSermon, updateSermon } from '../../../../controllers/sermonController'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteSermon)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getSermon)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateSermon)

export default handler