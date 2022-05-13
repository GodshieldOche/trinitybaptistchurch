import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { createService, getAdminService } from '../../../../controllers/serviceController'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createService)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminService)

export default handler