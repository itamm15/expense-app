import { useState } from "react";
import NewExpenseForm from "./components/NewExpenseForm";
import NavBar from "./components/NavBar";
import useFetch from "./hooks/useFetch";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isPending, error } = useFetch("http://localhost:3000/expenses");

  return (
    <>
      <NavBar setIsModalOpen={setIsModalOpen} />
      <NewExpenseForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ExpenseList data={data} isPending={isPending} error={error} />
    </>
  );
}

export default App;
