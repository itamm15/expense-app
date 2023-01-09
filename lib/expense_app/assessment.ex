defmodule ExpenseApp.Assessment do
  # aliases
  alias ExpenseApp.Context.Expenses

  defdelegate get_expense(id), to: Expenses
  defdelegate list_expenses, to: Expenses
  defdelegate create_expense(expense), to: Expenses
  defdelegate delete_expense(expense), to: Expenses
end