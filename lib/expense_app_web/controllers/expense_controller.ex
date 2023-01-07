defmodule ExpenseAppWeb.ExpenseController do
  use ExpenseAppWeb, :controller

  # aliases
  alias ExpenseApp.Expense

  def index(conn, _params) do
    expenses = Expense.list_expenses()

    json(conn, expenses)
  end
end
