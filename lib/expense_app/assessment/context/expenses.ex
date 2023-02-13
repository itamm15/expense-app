defmodule ExpenseApp.Context.Expenses do
  @moduledoc false
  # imports
  import Ecto.Query

  # aliases
  alias ExpenseApp.Expense
  alias ExpenseApp.Repo

  def get_expense(id) do
    Expense
    |> where([expense], expense.id == ^id)
    |> Repo.one()
  end

  def list_expenses do
    Expense
    |> Repo.all()
  end

  def create_expense(expense) do
    %Expense{}
    |> Expense.changeset(expense)
    |> Repo.insert()
  end

  def delete_expense(id) when is_binary(id) do
    id
    |> String.to_integer()
    |> get_expense()
    |> delete_expense()
  end

  def delete_expense(expense) do
    expense
    |> Repo.delete()
  end
end
