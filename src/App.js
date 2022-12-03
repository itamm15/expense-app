import { useState } from "react";
import NewExpenseForm from "./_forms/NewExpenseForm";
import NavBar from "./_forms/NavBar";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <NavBar setIsModalOpen={setIsModalOpen} />
      <NewExpenseForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
