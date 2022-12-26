import NavBar from "./components/NavBar";
import useFetch from "./hooks/useFetch";
import ExpenseList from "./components/ExpenseList";

function App() {
  const { data, isPending, error } = useFetch("http://localhost:3001/expenses");

  return (
    <>
      <NavBar />
      <ExpenseList data={data} isPending={isPending} error={error} />
    </>
  );
}

export default App;
