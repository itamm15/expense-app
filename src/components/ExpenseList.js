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
              <th scope="col">ID</th>
              <th scope="col">Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {expensesList &&
              expensesList.map(({ id, amount, description, type, date }) => (
                <tr>
                  <th scope="row">{id}</th>
                  <th>{amount}</th>
                  <th>{description}</th>
                  <th>{date}</th>
                  <th>{type}</th>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default ExpenseList;
