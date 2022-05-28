import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { createNews, getAdminNews } from '../../../../controllers/newsController'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser, authorizeRoles('admin')).post(createNews)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getAdminNews)

export default handler