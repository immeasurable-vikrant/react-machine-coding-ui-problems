import { useEffect, useState, useRef, MutableRefObject } from "react";

interface FetchResult {
  docs: unknown[];
}

interface UseFetchReturn {
  fetchResults: () => Promise<void>;
  query: string;
  page: number;
  setQuery: (query: string) => void;
  setPage: (page: number) => void;
  data: any[];
  error: Error | null;
  isLoading: boolean;
}

const useFetch = (): UseFetchReturn => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const controller = useRef<AbortController | null>(null);

  const fetchResults = async (): Promise<void> => {
    if (query.length <= 2) return;
    
    try {
      setIsLoading(true);
      controller.current = new AbortController();
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&page=${page}`,
        { signal: controller.current.signal }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const results: FetchResult = await response.json();
      setData((prevData) => [...prevData, ...results.docs]);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err as Error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    controller.current?.abort();

    if (query.length > 2) {
      fetchResults();
    }

    return () => {
      controller.current?.abort();
    };
  }, [query, page]);

  return {
    fetchResults,
    query,
    page,
    setQuery,
    setPage,
    data,
    error,
    isLoading,
    setIsLoading
  };
};

export default useFetch;
