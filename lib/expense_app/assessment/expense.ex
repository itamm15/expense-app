defmodule ExpenseApp.Expense do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  @required [:description, :type, :amount, :date, :currency, :user_id]
  @derive {Jason.Encoder, only: @required ++ [:id]}

  schema "expenses" do
    field :description, :string
    field :type, Ecto.Enum, values: [:income, :outcome]
    field :amount, Money.Ecto.Amount.Type
    field :date, :date
    field :currency, :string, default: "EUR"

    belongs_to :user, ExpenseApp.User

    timestamps()
  end

  @type id :: integer()
  @type t :: %__MODULE__{id: id()}

  def changeset(expense, attrs) do
    expense
    |> cast(attrs, @required)
    |> cast_assoc(:user)
    |> validate_required(@required)
  end
end
