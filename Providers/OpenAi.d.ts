import { NextApiRequest, NextApiResponse } from "next";
export type OpenAiConfig = {
    apiKey: string;
};
declare const OpenAiProvider: (config: OpenAiConfig, req: NextApiRequest, res: NextApiResponse) => Promise<void>;
export default OpenAiProvider;
