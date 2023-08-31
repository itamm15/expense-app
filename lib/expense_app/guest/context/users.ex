defmodule ExpenseApp.Context.Users do
  @moduledoc false

  use Contexted.CRUD,
    repo: ExpenseApp.Repo,
    schema: ExpenseApp.User
end
