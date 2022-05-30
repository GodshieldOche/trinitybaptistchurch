import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import onError from '../../../middleware/errorMiddleware'
import { postEmail } from '../../../controllers/emailController'

const handler = nc({ onError })

dbConnect()

handler.post(postEmail)

export default handler