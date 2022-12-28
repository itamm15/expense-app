import useExpenses from "../hooks/useExpenses";

const ExpenseList = () => {
  const { expensesList, error, isLoading } = useExpenses();
  return (
    <>
      {error && <h1>Could not fetch data, an error occurred.</h1>}
      {!isLoading && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {expensesList &&
              expensesList.map(({ amount, description, expenseType, date }) => (
                <tr>
                  <th scope="row">{amount}</th>
                  <th>{description}</th>
                  <th>{date}</th>
                  <th>{expenseType}</th>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ExpenseList;