import nc from 'next-connect'
import { currentUser } from '../../controllers/authController'
import { isAuthenticatedUser } from '../../middleware/auth'
import dbConnect from '../../utils/dbConnect'

const handler = nc()

dbConnect()

handler.use(isAuthenticatedUser).get(currentUser)

export default handler