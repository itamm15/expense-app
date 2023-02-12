defmodule ExpenseApp.Repo.Migrations.AddPasswordToUsersTable do
  use Ecto.Migration

  def up do
    alter table(:users) do
      add :password, :string, null: false
      add :password_confirmation, :string, null: false
    end
  end

  def down do
    alter table(:users) do
      remove :password
      remove :password_confirmation
    end
  end
end
