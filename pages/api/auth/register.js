import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { register } from '../../../controllers/authController'
import onError from '../../../middleware/errorHandler'

const handler = nc({ onError })

dbConnect()

handler.post(register)

export default handler