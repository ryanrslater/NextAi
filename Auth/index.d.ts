import { NextApiResponse } from "next";
export type AuthProvider = undefined | "Auth0" | "NextAuth";
declare const Auth: (auth: AuthProvider, res: NextApiResponse) => Promise<void>;
export default Auth;
