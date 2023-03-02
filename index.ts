import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import AiProvider, { Provider } from "./Providers";
import Auth, { AuthProvider } from "./Auth";

export * from './Hooks'

type AiOptions = {
    Providers: Provider;
    auth?: AuthProvider
    callback?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

const NextAiHandler = async (req: NextApiRequest, res: NextApiResponse, args: AiOptions) => {
    await AiProvider(args.Providers, req, res);
    if (args.callback) args.callback(req, res);
}

const NextAi = (...args: [AiOptions]): NextApiHandler => {
    return async (req: NextApiRequest, res: NextApiResponse) => await NextAiHandler(req, res, args[0]);
}

export default NextAi