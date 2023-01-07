defmodule ExpenseApp.Repo do
  use Ecto.Repo,
    otp_app: :expense_app,
    adapter: Ecto.Adapters.Postgres
end
