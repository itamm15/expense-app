defmodule ExpenseAppWeb.GuestController do
  use ExpenseAppWeb, :controller

  alias ExpenseApp.Guest

  @spec create(Plug.Conn.t(), Plug.Conn.params()) :: Plug.Conn.t()
  def create(conn, params) do
    case Guest.create_user(params) do
      {:ok, created_user} ->
        conn
        |> put_status(201)
        |> json(created_user)

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(400)
        |> put_view(ExpenseAppWeb.ErrorView)
        |> render("error.json", changeset: changeset)
    end
  end
end
