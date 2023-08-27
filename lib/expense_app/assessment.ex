defmodule ExpenseApp.Assessment do
  @moduledoc """
  Module responsible for handling expenses.
  """

  alias ExpenseApp.Context.Expenses

  defdelegate get_expense(id), to: Expenses
  defdelegate get_expenses_for_user(user_id), to: Expenses
  defdelegate list_expenses, to: Expenses
  defdelegate create_expense(expense), to: Expenses
  defdelegate update_expense(expense, params), to: Expenses
  defdelegate delete_expense(expense), to: Expenses
end
