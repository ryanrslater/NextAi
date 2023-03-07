import { NextApiResponse } from "next"

export type AuthProvider = undefined | "Auth0" | "NextAuth"

const Auth = async (auth: AuthProvider, res: NextApiResponse): Promise<void> => {
    if (auth) {
        if (auth === "Auth0") {
            // Auth0
            const data = await fetch("/api/auth/me", {
                method: "GET",
                credentials: "include",
            })
            const session = await data.json()
            if (!session.user) {
                res.status(401).json({ message: "Unauthorized" })
            }
        } else if (auth === "NextAuth") {
            // NextAuth
            const data = await fetch("/api/auth/session", {
                method: "GET",
                credentials: "include",
            })
            const session = await data.json()
            if (!session.user) {
                res.status(401).json({ message: "Unauthorized" })
            }
        }
        else throw new Error("Invalid Auth Provider")
    }
}

export default Auth