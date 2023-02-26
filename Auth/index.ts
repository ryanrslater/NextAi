export type AuthProvider = undefined | "Auth0" | "NextAuth"

const Auth = async (auth: AuthProvider): Promise<boolean> => {
    if (auth) {
        if (auth === "Auth0") {
            // Auth0
            return true
        } else if (auth === "NextAuth") {
            // NextAuth
            return true
        }
        else throw new Error("Invalid Auth Provider")
    } else return true
}

export default Auth