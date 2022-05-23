import nc from 'next-connect'
import dbConnect from '../../../utils/dbConnect'
import onError from '../../../middleware/errorHandler'
import { getClientMinisters } from '../../../controllers/ministerController'

const handler = nc({ onError })

dbConnect()

handler.get(getClientMinisters)

export default handler