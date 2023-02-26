import React from 'react'

const useOpenAi = () => {
    const [success, setSuccess] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<boolean>(false);
    const [response, setResponse] = React.useState<string>("");
    const [errorMessage, setErrorMessage] = React.useState<string>("");

    const submit = async (body: any) => {
        setLoading(true);
        setError(false);
        setSuccess(false);
        setErrorMessage("");
        try {
            const res = await fetch("/api/nextai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            if (res.ok) {
                setResponse(data.message);
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
        response
    }
}

export default useOpenAi