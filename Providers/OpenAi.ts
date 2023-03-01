import { Configuration, OpenAIApi } from "openai";

export type OpenAiConfig = {
    apiKey: string;
}


const OpenAiProvider = async (config: OpenAiConfig, body: any) => {
    const configuration = new Configuration({
        apiKey: config.apiKey,
    });
    console.log('Open AI')
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createCompletion({
        model: body.model ? body.model : "text-davinci-002",
        prompt: body.prompt,
    });
    console.log("openai ran", completion)
    return completion;
}

export default OpenAiProvider;