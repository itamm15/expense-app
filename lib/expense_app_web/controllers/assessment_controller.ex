defmodule ExpenseAppWeb.AssessmentController do
  use ExpenseAppWeb, :controller

  # aliases
  alias ExpenseApp.Expense
  alias ExpenseApp.Assessment

  @spec index(Plug.Conn.t(), map()) :: Plug.Conn.t()
  def index(conn, _params) do
    expenses = Assessment.list_expenses() |> format_money_type()

    json(conn, expenses)
  end

  @spec create(Plug.Conn.t(), map()) :: Plug.Conn.t()
  def create(conn, params) do
    case Assessment.create_expense(params) do
      {:ok, created_expense} ->
        created_expense = created_expense |> format_money_type()
        json(conn, created_expense)

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end

  @spec delete(Plug.Conn.t(), map()) :: Plug.Conn.t()
  def delete(conn, %{"id" => id}) do
    case Assessment.delete_expense(id) do
      {:ok, _deleted_expense} ->
        json(conn, "Deleted")

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end

  ##### PRIVATE #####

  @spec format_money_type(Expense.t()) :: Expense.t()
  defp format_money_type(%Expense{} = expense) do
    amount = Money.to_string(expense.amount)
    Map.put(expense, :amount, amount)
  end

  @spec format_money_type(list(Expense.t())) :: list()
  defp format_money_type(expenses_list) do
    expenses_list
    |> Enum.map(fn %{amount: amount} = expenses ->
      stringified_money = Money.to_string(amount, symbol: false)
      Map.put(expenses, :amount, stringified_money)
    end)
  end
end
