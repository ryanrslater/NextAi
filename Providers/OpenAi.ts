import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

export type OpenAiConfig = {
    apiKey: string;
}


const OpenAiProvider = async (config: OpenAiConfig, req: NextApiRequest, res: NextApiResponse) => {
    const configuration = new Configuration({
        apiKey: config.apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: req.body.model ? req.body.model : "text-davinci-002",
        prompt: req.body.prompt,
    });
    res.status(201).json({ message: completion.data.choices[0].text });
}

export default OpenAiProvider;