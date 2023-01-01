export default async function createExpense(
  newExpense,
  expensesList,
  setExpensesList
) {
  await fetch("/expenses", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newExpense),
  })
    .then((response) => response.json())
    .then((parsedExpense) => {
      setExpensesList([parsedExpense, ...expensesList]);
    });
}
