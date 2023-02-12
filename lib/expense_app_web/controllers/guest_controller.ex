defmodule ExpenseAppWeb.GuestController do
  use ExpenseAppWeb, :controller

  # aliases
  alias ExpenseApp.Guest

  def create(conn, params) do
    IO.inspect(params, label: "params")

    case Guest.create_user(params) do
      {:ok, created_user} ->
        IO.inspect(created_user, label: "created_user")
        json(conn, created_user)

      {:error, %Ecto.Changeset{} = changeset} ->
        IO.inspect(changeset, label: "changeset")

        conn
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end
end
