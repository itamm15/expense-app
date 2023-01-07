defmodule ExpenseApp.Assessment do
  # aliases
  alias ExpenseApp.Context.Expenses

  defdelegate list_expenses, to: Expenses
  defdelegate create_expense(expense), to: Expenses
end
