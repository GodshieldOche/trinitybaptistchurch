import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import { register } from '../../../controllers/authController'

const handler = nc()

dbConnect()

handler.post(register)

export default handler