defmodule ExpenseApp.Repo.Migrations.AddUniqueConstraint do
  use Ecto.Migration

  @disable_ddl_transaction true
  @disable_migration_lock true

  def change do
    create unique_index(:users, [:email], concurrently: true)
  end
end
