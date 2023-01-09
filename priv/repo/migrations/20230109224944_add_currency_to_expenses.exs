defmodule ExpenseApp.Repo.Migrations.AddCurrencyToExpenses do
  use Ecto.Migration

  def change do
    alter table(:expenses) do
      add :currency, :string, default: "EUR"
    end
  end
end
