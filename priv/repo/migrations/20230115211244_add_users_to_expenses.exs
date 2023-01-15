defmodule ExpenseApp.Repo.Migrations.AddUsersToExpenses do
  use Ecto.Migration

  def change do
    alter table(:expenses) do
      add :user_id, references(:users)
    end
  end
end
