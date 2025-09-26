import { CredentialsProvider } from "next-auth/providers/credentials"
import User from "@/models/user"
import bcrypt from "bcryptjs"
import dbConnect from "@/utils/dbConnect"

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                await dbConnect();
            }
        })
    ]
}