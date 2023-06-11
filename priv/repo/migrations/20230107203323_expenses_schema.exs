defmodule ExpenseApp.Repo.Migrations.ExpensesSchema do
  use Ecto.Migration

  # excellent_migrations:safety-assured-for-this-file raw_sql_executed
  def change do
    create_expenese_type_query = "CREATE TYPE expense_type AS ENUM('income', 'outcome')"
    drop_query = "DROP TYPE expense_type"
    execute(create_expenese_type_query, drop_query)

    create table(:expenses) do
      add :description, :string
      add :type, :expense_type
      add :amount, :integer
      add :date, :date

      timestamps()
    end
  end
end
