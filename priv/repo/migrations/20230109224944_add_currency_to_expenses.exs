defmodule ExpenseApp.Repo.Migrations.AddCurrencyToExpenses do
  use Ecto.Migration

  def change do
    alter table(:expenses) do
      add :currency, :string
    end
  end
end
