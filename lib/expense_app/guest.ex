defmodule ExpenseApp.Guest do
  @moduledoc """
  Module responsible for handling user.
  """

  # aliases
  alias ExpenseApp.Context.Users

  defdelegate create_user(user), to: Users
end
