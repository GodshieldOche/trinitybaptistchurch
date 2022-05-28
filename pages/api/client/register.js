import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import onError from '../../../middleware/errorHandler'
import { postRegister } from '../../../controllers/registerController'

const handler = nc({ onError })

dbConnect()

handler.post(postRegister)

export default handler