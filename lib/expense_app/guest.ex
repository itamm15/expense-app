defmodule ExpenseApp.Guest do
  @moduledoc """
  Module responsible for handling user.
  """

  import Contexted.Delegator

  alias ExpenseApp.Context.Users

  delegate_all(Users)
end
