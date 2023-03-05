defmodule ExpenseAppWeb.GuestController do
  use ExpenseAppWeb, :controller

  # aliases
  alias ExpenseApp.Guest

  @spec create(Plug.Conn.t(), map()) :: Plug.Conn.t()
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
