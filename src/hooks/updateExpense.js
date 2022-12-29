export default async function updateExpense(
  newExpense,
  expensesList,
  setExpensesList,
  expensesToUpdateId
) {
  await fetch(`http://localhost:3001/expenses/${expensesToUpdateId}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newExpense),
  })
    .then((response) => response.json())
    .then((parsedExpense) => {
      const updatedExpensesList = expensesList.map((expense) =>
        expense.id === expensesToUpdateId ? parsedExpense : expense
      );
      setExpensesList(updatedExpensesList);
    });
}
