export default async function deleteExpense(
  expenseId,
  expensesList,
  setExpensesList
) {
  await fetch(`http://localhost:3001/expenses/${expenseId}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  }).then(() => {
    const filteredExpenses = expensesList.filter(({ id }) => {
      return expenseId !== id;
    });
    setExpensesList(filteredExpenses);
  });
}
