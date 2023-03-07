import { NextApiRequest, NextApiResponse } from "next";
import OpenAiProvider, { OpenAiConfig } from "./OpenAi";
import RekognitionProvider from "./AWS/Rekognition";
import { AWSConfig } from "./AWS";

export enum Routes {
    OPENAI = 'openai',
    REKOGNITION = 'rekognition'
}

export type Provider = {
    OpenAi?: OpenAiConfig;
    AWS?: AWSConfig;
}

const AiProvider = async (config: Provider, req: NextApiRequest, res: NextApiResponse) => {
    if (Array.isArray(req.query.nextai)) {
        if (req.query.nextai[0] === Routes.OPENAI) {
            if (config.OpenAi) {
                await OpenAiProvider(config.OpenAi, req, res);
            } else {
                res.status(500).json({ message: "Internal Server Error" })
            }
        }
        if (req.query.nextai[0] === Routes.REKOGNITION) {
            if (config.AWS) {
                await RekognitionProvider(config.AWS, req, res);
            } else {
                res.status(500).json({ message: "Internal Server Error" })
            }
        }
    } else {
        res.status(404).json({ message: "Not Found" })
    }
}

export default AiProvider;