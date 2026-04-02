import { useCallback, useEffect, useState, useRef } from "react";

type HttpConfig = {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
};

const sendHttpRequest = async <T>(
  url: string,
  config?: HttpConfig,
): Promise<T> => {
  const res = await fetch(url, config);
  const resData = await res.json();

  if (!res.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request.",
    );
  }

  return resData;
};

export const useHttp = <T>(
  url: string,
  config?: HttpConfig,
  initialData?: T,
) => {
  const configRef = useRef(config);

  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const clearData = () => {
    setData(initialData);
  };

  const sendRequest = useCallback(
    async (requestData?: BodyInit) => {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest<T>(url, {
          ...configRef.current,
          body: requestData,
        });
        setData(resData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong!");
        }
      }
      setIsLoading(false);
    },
    [url],
  );

  useEffect(() => {
    if (
      (configRef.current &&
        (configRef.current.method === "GET" || !configRef.current.method)) ||
      !configRef.current
    ) {
      sendRequest();
    }
  }, [sendRequest]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
};
