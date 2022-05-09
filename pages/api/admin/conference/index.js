import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { conferenceSermons, createConference, deleteConferenceSermon, getAdminConferences } from '../../../../controllers/conferenceController'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createConference)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(conferenceSermons)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminConferences)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteConferenceSermon)

export default handler