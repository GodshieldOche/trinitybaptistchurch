import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import User from '../../../models/User'
import dbConnect from '../../../utils/dbConnect'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from "../../../lib/mongodb"


export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                dbConnect()
                const { email, password } = credentials;

                // check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email and password')
                }

                // find the email and password in the database
                const user = await User.findOne({ email })

                if (!user) {
                    throw new Error('Invalid email or Password')
                }
                const isPasswordMatch = await bcrypt.compare(password, user.password)

                if (!isPasswordMatch) {
                    throw new Error('Invalid email or Password')
                }

                return Promise.resolve(user)
            }
        }),
    ],
    secret: "l9zh0+Uldc9W/IHMY42P/rDFIGkMjfj0nQDg1EygFDc=",
    adapter: MongoDBAdapter(clientPromise),
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            user && (token.user = user)
            return token
        },
        async session({ session, token }) {
            session.user = token.user
            return session
        }
    }
})