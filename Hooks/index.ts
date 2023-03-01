import * as React from 'react'

export const useOpenAi = () => {
    const [success, setSuccess] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);
    const [errorMessage, setErrorMessage] = React.useState<string>("");

    const submit = async (body: any) => {
        setLoading(true);
        setError(false);
        setSuccess(false);
        setErrorMessage("");
        let response;
        try {
            const res = await fetch("/api/ai/openai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            if (res.ok) {
                response = data.message;
                setSuccess(true);
            }
            else {
                setErrorMessage(data.message);
                setError(true);
            }
        } finally {
            setLoading(false);
        }
        return response
    }
    return {
        submit,
        success,
        error,
        loading,
        errorMessage,
    }
}

