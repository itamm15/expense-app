defmodule ExpenseApp.Assessment do
  @moduledoc """
  Module responsible for handling expenses.
  """

  import Contexted.Delegator

  alias ExpenseApp.Context.Expenses

  delegate_all(Expenses)

end
