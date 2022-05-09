import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { deleteConference, getConference, updateConference, updateConferenceSermon } from '../../../../controllers/conferenceController'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteConference)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getConference)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(updateConferenceSermon)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateConference)

export default handler