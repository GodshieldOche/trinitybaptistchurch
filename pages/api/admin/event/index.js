import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { createEvent, getAdminEvent, deleteEventSession } from '../../../../controllers/eventController'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createEvent)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminEvent)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteEventSession)

export default handler