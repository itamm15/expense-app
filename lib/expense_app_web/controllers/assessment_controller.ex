defmodule ExpenseAppWeb.AssessmentController do
  use ExpenseAppWeb, :controller

  alias ExpenseApp.Assessment
  alias ExpenseApp.Expense

  @spec index(Plug.Conn.t(), Plug.Conn.params()) :: Plug.Conn.t()
  def index(conn, %{"user_id" => user_id}) do
    expenses = user_id |> Assessment.get_expenses_for_user() |> format_money_type()

    json(conn, expenses)
  end

  @spec create(Plug.Conn.t(), Plug.Conn.params()) :: Plug.Conn.t()
  def create(conn, params) do
    case Assessment.create_expense(params) do
      {:ok, created_expense} ->
        created_expense = format_money_type(created_expense)

        conn
        |> put_status(201)
        |> json(created_expense)

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(400)
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end

  @spec delete(Plug.Conn.t(), Plug.Conn.params()) :: Plug.Conn.t()
  def delete(conn, %{"id" => id}) do
    case Assessment.delete_expense(id) do
      {:ok, _deleted_expense} ->
        conn
        |> put_status(200)
        |> json("Deleted")

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(400)
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end

  ##### PRIVATE #####

  @spec format_money_type([Expense.t()] | Expense.t()) :: [Expense.t()] | Expense.t()
  defp format_money_type(expenses_list) when is_list(expenses_list) do
    Enum.map(expenses_list, &format_money_type(&1))
  end

  defp format_money_type(%Expense{} = expense) do
    amount = Money.to_string(expense.amount, symbol: false)
    Map.put(expense, :amount, amount)
  end
end
