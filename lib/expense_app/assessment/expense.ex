defmodule ExpenseApp.Expense do
  use Ecto.Schema
  import Ecto.Changeset

  @required [:id, :description, :type, :amount, :date, :currency]

  @derive {Jason.Encoder, only: @required}
  schema "expenses" do
    field :description, :string
    field :type, Ecto.Enum, values: [:income, :outcome]
    field :amount, Money.Ecto.Amount.Type
    field :date,  :date
    field :currency, :string, default: "EUR"

    timestamps()
  end

  def changeset(expense, attrs) do
    expense
    |> cast(attrs, @required)
    |> validate_required(@required)
  end
end
