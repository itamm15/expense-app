defmodule ExpenseApp.Context.Expenses do
  @moduledoc false

  use Contexted.CRUD,
    repo: ExpenseApp.Repo,
    schema: ExpenseApp.Expense

  import Ecto.Query

  alias ExpenseApp.Expense
  alias ExpenseApp.Repo
  alias ExpenseApp.User

  @spec get_expenses_for_user(User.id()) :: [Expense.t()]
  def get_expenses_for_user(user_id) do
    Expense
    |> where([expense], expense.user_id == ^user_id)
    |> Repo.all()
  end
end
