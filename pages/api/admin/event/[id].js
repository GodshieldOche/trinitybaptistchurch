import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { deleteEvent, getEvent, updateEvent } from '../../../../controllers/eventController'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteEvent)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getEvent)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateEvent)

export default handler