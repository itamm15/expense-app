export const fetchExpenses = (setExpensesList, setError, setIsLoading) => {
  const abortController = new AbortController();

  fetch("http://localhost:3001/expenses", { signal: abortController.signal })
    .then((response) => {
      if (!response.ok)
        throw Error(`Could not fetch data, response=${response.json}`);
      return response.json();
    })
    .then((parsedData) => {
      setExpensesList(parsedData);
      setIsLoading(false);
    })
    .catch((error) => {
      if (error.name === "AbortError") return;
      setIsLoading(false);
      setError(error);
    });

  return () => {
    abortController.abort();
  };
};
