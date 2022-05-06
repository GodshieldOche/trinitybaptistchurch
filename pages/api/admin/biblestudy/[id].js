import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { deleteBibleStudy, getBibleStudy, updateBibleStudy } from '../../../../controllers/bibleStudyController'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteBibleStudy)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getBibleStudy)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateBibleStudy)

export default handler