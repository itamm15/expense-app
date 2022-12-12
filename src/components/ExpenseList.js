const ExpenseList = ({ data, isPending, error }) => {
  return (
    <>
      {!isPending && (
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
            {data &&
              data.map(({ id, amount, description, type, date }) => (
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
