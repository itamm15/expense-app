defmodule ExpenseAppWeb.Router do
  use ExpenseAppWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ExpenseAppWeb do
    pipe_through :api

    get "/expenses/:user_id", AssessmentController, :index
    post "/expenses", AssessmentController, :create
    delete "/expenses/:id", AssessmentController, :delete

    post "/users", GuestController, :create
  end

  scope "/", ExpenseAppWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", ExpenseAppWeb do
  #   pipe_through :api
  # end
end
