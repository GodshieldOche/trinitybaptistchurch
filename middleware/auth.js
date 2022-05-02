import { getSession } from 'next-auth/react'


const isAuthenticatedUser = async (req, res, next) => {
    try {
        const session = await getSession({ req })
        if (!session) {
            throw new Error('login first to access this resource')
        }

        req.user = session.user;
        next()
    } catch (error) {
        next(error)
    }

}


export {
    isAuthenticatedUser,
}