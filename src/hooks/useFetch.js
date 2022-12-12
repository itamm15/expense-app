import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(endpoint, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) throw Error("Could not fetch data!");
        return response.json();
      })
      .then((parsedData) => {
        setData(parsedData);
        setIsPending(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") return;
        setIsPending(false);
        setError(error);
      });

    return () => {
      abortController.abort();
    };
  }, [endpoint]);
};

export default useFetch;
