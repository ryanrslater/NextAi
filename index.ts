import { NextApiRequest, NextApiResponse } from "next";
import { Provider } from "./Providers";
import { OpenAiConfig } from "./Providers/OpenAi";
enum Routes {
    OPENAI = 'openai'    
}


type AiOptions = {
    Providers: Provider[];
    auth?: undefined | "Auth0" | "NextAuth";
    callback?: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}

const NextAiHandler = async (req: NextApiRequest, res: NextApiResponse, args:  AiOptions) => {
    if (!req.query.nextai) return res.status(400).json({ message: "Bad Request" });
    let userIsAuthenticated = true;
    if (args.auth) {
        if (args.auth === "Auth0") {
            // Auth0
        } else if (args.auth === "NextAuth") {
            // NextAuth
        }
    }
    if (!userIsAuthenticated) return res.status(401).json({ message: "Unauthorized" });

    if (req.query.nextai[0] === Routes.OPENAI) {

        const openAi = args.Providers.find((provider) => provider.name === "OpenAiProvider")
        if (!openAi) return res.status(500).json({ message: "Internal Server Error" });


    
    if (args.callback) {
        args.callback(req, res);
    }

    return res.status(200).json({ message: "Hello World" });
}


const NextAi = (...args:  [AiOptions]): any => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        await NextAiHandler(req, res, args[0]);
    }
}

export default NextAi;