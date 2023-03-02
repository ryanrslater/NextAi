import { NextApiRequest, NextApiResponse } from "next";
import OpenAiProvider, { OpenAiConfig } from "./OpenAi";

export enum Routes {
    OPENAI = 'openai'
}

export type Provider = {
    OpenAi?: OpenAiConfig;
}


const AiProvider = async (config: Provider, req: NextApiRequest, res: NextApiResponse) => {
    if (Array.isArray(req.query.nextai)) {
        if (req.query.nextai[0] === Routes.OPENAI) {
            if (!config.OpenAi) return { message: "Internal Server Error" };
            await OpenAiProvider(config.OpenAi, req, res);
        }
    } else {
        res.status(404).json({ message: "Not Found" })
    }
}

export default AiProvider;