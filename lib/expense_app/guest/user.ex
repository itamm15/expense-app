defmodule ExpenseApp.User do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  @required [:firstname, :lastname, :birthdate, :password, :password_confirmation, :email]
  @optional [:currency]

  @derive {Jason.Encoder, only: @required ++ @optional ++ [:id]}
  schema "users" do
    field :password, :string
    field :password_confirmation, :string
    field :email, :string
    field :firstname, :string
    field :birthdate, :date
    field :lastname, :string
    field :currency, :string, default: "PLN"

    has_many :expenses, ExpenseApp.Expense

    timestamps()
  end

  @type id :: integer()
  @type t :: %__MODULE__{id: id()}

  def changeset(user, attrs) do
    user
    |> cast(attrs, @required ++ @optional)
    |> validate_required(@required)
    |> unique_constraint(:email, message: "This email is already taken!")
  end
end
