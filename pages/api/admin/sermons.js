import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { createSermon } from '../../../controllers/sermonController'
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth'

const handler = nc()

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createSermon)

export default handler