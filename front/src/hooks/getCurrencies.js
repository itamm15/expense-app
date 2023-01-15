export const getCurrencies = () => {
  fetch("/currencies", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  }).then((currencies) => currencies.json());
};
