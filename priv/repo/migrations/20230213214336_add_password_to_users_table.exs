defmodule ExpenseApp.Repo.Migrations.AddPasswordToUsersTable do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :password, :string, null: false
      add :password_confirmation, :string, null: false
    end
  end
end
