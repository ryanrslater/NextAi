import { NextApiRequest, NextApiResponse } from "next";
import { OpenAiConfig } from "./OpenAi";
export declare enum Routes {
    OPENAI = "openai"
}
export type Provider = {
    OpenAi?: OpenAiConfig;
};
declare const AiProvider: (config: Provider, req: NextApiRequest, res: NextApiResponse) => Promise<{
    message: string;
} | undefined>;
export default AiProvider;
