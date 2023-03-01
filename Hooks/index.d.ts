export declare const useOpenAi: (model: string | null) => {
    submit: (prompt: string) => Promise<any>;
    success: boolean;
    error: boolean;
    loading: boolean;
    errorMessage: string;
};
