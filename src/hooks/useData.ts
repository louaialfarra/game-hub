import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  request?: AxiosRequestConfig,
  dep?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);

      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...request,
        })
        .then((res) => {
          setData(res.data.results);

          console.log(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
        })
        .finally(() => setIsLoading(false));
      return () => controller.abort();
    },

    dep ? [...dep] : []
  );

  return { data, error, isLoading };
};

export default useData;
