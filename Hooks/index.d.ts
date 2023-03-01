export declare const useOpenAi: () => {
    submit: (body: any) => Promise<any>;
    success: boolean;
    error: boolean;
    loading: boolean;
    errorMessage: string;
};
