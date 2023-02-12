defmodule ExpenseApp.Repo.Migrations.AddEmailToUsersTable do
  use Ecto.Migration

  def up do
    alter table(:users) do
      add :email, :string, null: false
    end
  end

  def down do
    alter table(:users) do
      remove :email
    end
  end
end
