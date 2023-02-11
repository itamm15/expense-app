defmodule ExpenseApp.Context.Expenses do
  @moduledoc false
  # imports
  import Ecto.Query

  # aliases
  alias ExpenseApp.Expense
  alias ExpenseApp.Repo

  @spec get_expense(Expense.id()) :: Expense.t()
  def get_expense(id) do
    Expense
    |> where([expense], expense.id == ^id)
    |> Repo.one()
  end

  @spec list_expenses() :: list(Expense.t())
  def list_expenses do
    Expense
    |> Repo.all()
  end

  @spec create_expense(map()) :: {:ok, Expense.t()} | {:error, %Ecto.Changeset.t()}
  def create_expense(expense) do
    %Expense{}
    |> Expense.changeset(expense)
    |> Repo.insert()
  end

  @spec delete_expense(Expense.t()) :: {:ok, Expense.t()} | {:error, %Ecto.Changeset.t()}
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
