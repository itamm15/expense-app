defmodule ExpenseApp.Repo.Migrations.AddDefaultCurrency do
  use Ecto.Migration

  # excellent_migrations:safety-assured-for-this-file column_type_changed
  def change do
    alter table(:expenses) do
      modify :currency, :string, default: "EUR"
    end
  end
end
