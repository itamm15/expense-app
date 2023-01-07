defmodule ExpenseAppWeb.ExpenseController do
  use ExpenseAppWeb, :controller

  # aliases
  alias ExpenseApp.Expense

  def index(conn, _params) do
    expenses = Expense.list_expenses() |> format_money_type()

    json(conn, expenses)
  end

  def create(conn, params) do
    IO.inspect(params, label: "params")
    case Expense.create_expense(params) do
      {:ok, _created_expense} ->
        expenses = Expense.list_expenses()
        json(conn, expenses)
      {:error, %Ecto.Changeset{} = changeset} ->
        IO.inspect(changeset, label: "changeset")
        conn
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end

  ##### PRIVATE #####

  defp format_money_type(expenses_list) do
    expenses_list |> Enum.map(fn %{amount: amount} = expenses ->
      stringified_money = Money.to_string(amount)
      Map.put(expenses, :amount, stringified_money)
    end)
  end
end
