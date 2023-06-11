defmodule ExpenseApp.Context.Users do
  @moduledoc false

  import Ecto.Query

  alias ExpenseApp.User
  alias ExpenseApp.Repo

  @spec get_user(User.id()) :: User.t()
  def get_user(id) do
    User
    |> where([user], user.id == ^id)
    |> Repo.one()
  end

  @spec create_user(map()) :: {:ok, User.t()} | {:error, Ecto.Changeset.t()}
  def create_user(user) do
    %User{}
    |> User.changeset(user)
    |> Repo.insert()
  end
end
