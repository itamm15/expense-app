defmodule ExpenseApp.Context.Expenses do

  # aliases
  alias ExpenseApp.Expense
  alias ExpenseApp.Repo

  def list_expenses do
    Expense
    |> Repo.all()
  end

  def create_expense(expense) do
    %Expense{}
    |> Expense.changeset(expense)
    |> Repo.insert()
  end
end
