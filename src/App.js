import NavBar from "./components/NavBar";
import ExpenseList from "./components/ExpenseList";
import { ExpensesContextProvider } from "./hooks/useExpenses";

function App() {
  return (
    <ExpensesContextProvider>
      <NavBar />
      <ExpenseList />
    </ExpensesContextProvider>
  );
}

export default App;
