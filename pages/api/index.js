import nc from 'next-connect'
import { getLatestResources } from '../../controllers/allController'
import dbConnect from '../../utils/dbConnect'

const handler = nc()

dbConnect()

handler.get(getLatestResources)

export default handler