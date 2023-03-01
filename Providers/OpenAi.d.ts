export type OpenAiConfig = {
    apiKey: string;
};
declare const OpenAiProvider: (config: OpenAiConfig, body: any) => Promise<import("axios").AxiosResponse<import("openai").CreateCompletionResponse, any>>;
export default OpenAiProvider;
