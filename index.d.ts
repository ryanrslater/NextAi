import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { Provider } from "./Providers";
import { AuthProvider } from "./Auth";
export * from './Hooks';
type AiOptions = {
    Providers: Provider;
    auth?: AuthProvider;
    callback?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
};
declare const NextAi: (args_0: AiOptions) => NextApiHandler;
export default NextAi;
