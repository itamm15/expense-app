import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

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
        data: [10, 20, 30, 200, 124, 10, 20, 30, 200, 124, 90, 1],
        fill: false,
        borderColor: "pink",
      },
    ],
  };
  return (
    <div style={chartStyles}>
      <Line data={data} height={300} width={1000} />
    </div>
  );
};

export default ExpenseChart;
