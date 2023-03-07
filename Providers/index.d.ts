import { NextApiRequest, NextApiResponse } from "next";
import { OpenAiConfig } from "./OpenAi";
import { AWSConfig } from "./AWS";
export declare enum Routes {
    OPENAI = "openai",
    REKOGNITION = "rekognition"
}
export type Provider = {
    OpenAi?: OpenAiConfig;
    AWS?: AWSConfig;
};
declare const AiProvider: (config: Provider, req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export default AiProvider;
