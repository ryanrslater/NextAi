import { OpenAiConfig } from "./OpenAi";
export declare enum Routes {
    OPENAI = "openai"
}
export type Provider = {
    OpenAi?: OpenAiConfig;
};
declare const AiProvider: (config: Provider, route: string[], body: any) => Promise<import("axios").AxiosResponse<import("openai").CreateCompletionResponse, any> | {
    message: string;
} | undefined>;
export default AiProvider;
