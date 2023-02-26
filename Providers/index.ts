import OpenAiProvider, { OpenAiConfig } from "./OpenAi";
import { Routes } from "../index";
export type Provider = {
    OpenAi?: OpenAiConfig;
}


const AiProvider = async (config: Provider, route: string[], body: any) => {
    let data

    if (route[0] === Routes.OPENAI) {
        if (!config.OpenAi) return { message: "Internal Server Error" };
        data = await OpenAiProvider(config.OpenAi, body);
    }

    return data;
}

export default AiProvider;