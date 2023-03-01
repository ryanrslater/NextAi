export type AuthProvider = undefined | "Auth0" | "NextAuth";
declare const Auth: (auth: AuthProvider) => Promise<boolean>;
export default Auth;
