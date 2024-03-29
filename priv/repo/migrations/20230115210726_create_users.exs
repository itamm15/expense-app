defmodule ExpenseApp.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :firstname, :string, null: false
      add :lastname, :string, null: false
      add :birthdate, :date, null: false
      add :currency, :string, null: true, default: "PLN"

      timestamps()
    end
  end
end
