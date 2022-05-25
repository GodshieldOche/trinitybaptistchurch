import nc from 'next-connect'
import { searchAllResources } from '../../controllers/allController'
import dbConnect from '../../utils/dbConnect'

const handler = nc()

dbConnect()

handler.get(searchAllResources)

export default handler