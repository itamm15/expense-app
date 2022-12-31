import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ExpenseChart = (expensesList) => {
  const chartStyles = {
    display: "flex",
    justifyContent: "center",
    height: "300px",
  };
  const data = {
    labels: [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ],
    datasets: [
      {
        label: "Income",
        data: [10, 20, 30],
        fill: true,
        backgroundColor: "green",
      },
      {
        label: "Outcome",
        data: [100, 250, 310],
        fill: false,
        backgroundColor: "red",
      },
    ],
  };
  return (
    <div style={chartStyles}>
      <Bar data={data} height={300} width={1000} />
    </div>
  );
};

export default ExpenseChart;
