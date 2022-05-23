import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { addMinister, getMinisters } from '../../../controllers/ministerController'
import { authorizeRoles, isAuthenticatedUser } from '../../../middleware/auth'
import onError from '../../../middleware/errorHandler'

const handler = nc({onError})

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(addMinister)

handler.get(getMinisters)

export default handler