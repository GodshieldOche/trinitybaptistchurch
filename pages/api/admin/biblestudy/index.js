import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { createBibleStudy, getAdminBibleStudies } from '../../../../controllers/bibleStudyController'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createBibleStudy)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminBibleStudies)

export default handler