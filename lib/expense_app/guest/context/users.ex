defmodule ExpenseApp.Context.Users do
  # imports
  import Ecto.Query

  # aliases
  alias ExpenseApp.User
  alias ExpenseApp.Repo

  def get_user(id) do
    User
    |> where([user], user.id == ^id)
    |> Repo.one()
  end

  def create_user(user) do
    %User{}
    |> User.changeset(user)
    |> Repo.insert()
  end
end
