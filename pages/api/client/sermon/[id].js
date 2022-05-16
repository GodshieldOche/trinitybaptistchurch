import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getSermonDetails } from '../../../../controllers/sermonController'

const handler = nc({ onError })

dbConnect()

handler.get(getSermonDetails)

export default handler