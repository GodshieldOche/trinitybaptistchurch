import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { addMinister, getMinisters } from '../../../controllers/ministerController'
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth'

const handler = nc()

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(addMinister)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getMinisters)

export default handler