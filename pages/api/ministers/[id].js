import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { deleteMinister, getMinister, updateMinister } from '../../../controllers/ministerController'
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth'

const handler = nc()

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteMinister)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getMinister)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateMinister)

export default handler