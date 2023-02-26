export type OpenAiConfig = {
    apiKey: string;
}
export type OpenAi = (config: OpenAiConfig) => OpenAiConfig;

const OpenAiProvider: OpenAi = (config: OpenAiConfig) => {
    return config
}

export default OpenAiProvider;