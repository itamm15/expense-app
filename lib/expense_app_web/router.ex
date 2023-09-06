defmodule ExpenseAppWeb.Router do
  use ExpenseAppWeb, :router
  use Pow.Phoenix.Router
  use PowAssent.Phoenix.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug ExpenseAppWeb.APIAuthPlug, otp_app: :expense_app
  end

  pipeline :api_protected do
    plug Pow.Plug.RequireAuthenticated, error_handler: ExpenseAppWeb.APIAuthErrorHandler
  end

  scope "/api", ExpenseAppWeb do
    pipe_through :api

    resources "/registration", GuestController, singleton: true, only: [:create]
    resources "/session", SessionController, singleton: true, only: [:create, :delete]
    post "/session/renew", SessionController, :renew
  end

  scope "/api", ExpenseAppWeb do
    pipe_through [:api, :api_protected]

    get "/expenses/:user_id", AssessmentController, :index
    post "/expenses", AssessmentController, :create
    put "/expenses/:id", AssessmentController, :update
    delete "/expenses/:id", AssessmentController, :delete
  end
end
