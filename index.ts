import { NextApiRequest, NextApiResponse } from "next";
import AiProvider, { Provider } from "./Providers";
import OpenAiProvider from "./Providers/OpenAi";

export enum Routes {
    OPENAI = 'openai'
}


type AiOptions = {
    Providers: Provider;
    auth?: undefined | "Auth0" | "NextAuth";
    callback?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

const NextAiHandler = async (req: NextApiRequest, res: NextApiResponse, args: AiOptions) => {
    if (!req.query.nextai || !Array.isArray(req.query.nextai)) return res.status(400).json({ message: "Bad Request" });
    let userIsAuthenticated = true;
    if (args.auth) {
        if (args.auth === "Auth0") {
            // Auth0
        } else if (args.auth === "NextAuth") {
            // NextAuth
        }
    }
    if (!userIsAuthenticated) return res.status(401).json({ message: "Unauthorized" });

    const data = await AiProvider(args.Providers, req.query.nextai, req.body);

    if (args.callback) {
        args.callback(req, res);
    }

    return res.status(201).json({ message: data });
}



const NextAi = (...args: [AiOptions]): any => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        await NextAiHandler(req, res, args[0]);
    }
}

export default NextAi