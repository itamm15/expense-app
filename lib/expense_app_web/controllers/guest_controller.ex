defmodule ExpenseAppWeb.GuestController do
  use ExpenseAppWeb, :controller

  # aliases
  alias ExpenseApp.Guest

  def create(conn, params) do
    case Guest.create_user(params) do
      {:ok, created_user} ->
        json(conn, created_user)

      {:error, %Ecto.Changeset{} = changeset} ->

        conn
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end
end
