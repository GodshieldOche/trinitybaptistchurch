import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { deleteMinister } from '../../../controllers/ministerController'
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth'

const handler = nc()

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteMinister)

export default handler