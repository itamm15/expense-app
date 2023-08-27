export default async function updateExpense(
  newExpense,
  expensesList,
  setExpensesList,
  expensesToUpdateId
) {
  await fetch(`/expenses/${expensesToUpdateId}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ id: expensesToUpdateId, params: newExpense }),
  })
    .then((response) => response.json())
    .then((parsedExpense) => {
      const updatedExpensesList = expensesList.map((expense) =>
        expense.id === expensesToUpdateId ? parsedExpense : expense
      );
      setExpensesList(updatedExpensesList);
    });
}
