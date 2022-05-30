import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { deleteMinister, getMinister, updateMinister } from '../../../controllers/ministerController'
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth'
import onError from '../../../middleware/errorMiddleware'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteMinister)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getMinister)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateMinister)

export default handler