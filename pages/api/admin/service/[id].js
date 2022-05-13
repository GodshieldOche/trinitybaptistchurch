import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { deleteService, getService, updateService } from '../../../../controllers/serviceController'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteService)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getService)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateService)

export default handler