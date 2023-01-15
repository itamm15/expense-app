defmodule ExpenseApp.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :firstname, :string
    field :lastname, :string
    field :birthdate, :date
    field :currency, :string, default: "PLN"

    ### ASSOCIATIONS ###
    has_many :expenses, ExpenseApp.Expense

    timestamps()
  end
end
