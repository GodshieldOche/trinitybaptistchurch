import nc from 'next-connect'
import dbConnect from '../../../../utils/dbConnect'
import onError from '../../../../middleware/errorHandler'
import { getSermons } from '../../../../controllers/sermonController'

const handler = nc({ onError })

dbConnect()

handler.get(getSermons)

export default handler