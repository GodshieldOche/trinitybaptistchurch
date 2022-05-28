import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import { authorizeRoles, isAuthenticatedUser } from '../../../../middleware/auth'
import onError from '../../../../middleware/errorMiddleware'
import { deleteNews, getNews, updateNews } from '../../../../controllers/newsController'

const handler = nc({ onError })
dbConnect()


handler.use(isAuthenticatedUser, authorizeRoles('admin')).delete(deleteNews)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).get(getNews)

handler.use(isAuthenticatedUser, authorizeRoles('admin')).put(updateNews)

export default handler