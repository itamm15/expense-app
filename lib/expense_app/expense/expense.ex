defmodule ExpenseApp.Expense.Expense do
  use Ecto.Schema
  import Ecto.Changeset

  @required [:description, :type, :amount, :date]

  @derive {Jason.Encoder, only: @required}
  schema "expenses" do
    field :description, :string
    field :type, Ecto.Enum, values: [:income, :outcome]
    field :amount, Money.Ecto.Amount.Type
    field :date,  :date

    timestamps()
  end

  def changeset(expense, attrs) do
    expense
    |> cast(attrs, @required)
    |> validate_required(@required)
  end
end