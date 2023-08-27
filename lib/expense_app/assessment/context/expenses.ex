defmodule ExpenseApp.Context.Expenses do
  @moduledoc false

  import Ecto.Query

  alias ExpenseApp.Expense
  alias ExpenseApp.Repo
  alias ExpenseApp.User

  @spec get_expense(Expense.id()) :: Expense.t()
  def get_expense(id) do
    Expense
    |> where([expense], expense.id == ^id)
    |> Repo.one()
  end

  @spec get_expenses_for_user(User.id()) :: [Expense.t()]
  def get_expenses_for_user(user_id) do
    Expense
    |> where([expense], expense.user_id == ^user_id)
    |> Repo.all()
  end

  @spec list_expenses() :: [Expense.t()]
  def list_expenses do
    Expense
    |> Repo.all()
  end

  @spec create_expense(map()) :: {:ok, Expense.t()} | {:error, Ecto.Changeset.t()}
  def create_expense(expense) do
    %Expense{}
    |> Expense.changeset(expense)
    |> Repo.insert()
  end

  @spec update_expense(Expense.t(), map()) :: {:ok, Expense.t()} | {:error, Ecto.Changeset.t()}
  def update_expense(%Expense{} = expense, params) do
    expense
    |> Expense.changeset(params)
    |> Repo.update()
  end

  @spec delete_expense(Expense.t() | Expense.id()) ::
          {:ok, Expense.t()} | {:error, Ecto.Changeset.t()}
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
