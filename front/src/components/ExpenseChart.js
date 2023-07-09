import "chart.js/auto";
import currency from "currency.js";
import "../styles/ExpenseChart.scss";
import { Bar } from "react-chartjs-2";
import { INCOME } from "../constants/expenseTypes";
import { getMonthName } from "../Utils";

const ExpenseChart = (expensesList) => {
  const { incomeSum, outcomeSum } = sumExpensesByDateAndType(expensesList);
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
        data: incomeSum,
        fill: true,
        backgroundColor: "green",
      },
      {
        label: "Outcome",
        data: outcomeSum,
        fill: true,
        backgroundColor: "red",
      },
    ],
  };
  return (
    <div className="expense-chart__display-chart">
      <Bar data={data} height={300} width={1000} />
    </div>
  );
};

const sumExpensesByDateAndType = (expenses) => {
  const monthlySums = {
    january: currency(0),
    february: currency(0),
    march: currency(0),
    april: currency(0),
    may: currency(0),
    june: currency(0),
    july: currency(0),
    august: currency(0),
    september: currency(0),
    october: currency(0),
    november: currency(0),
    december: currency(0),
  };
  const incomeSum = { ...monthlySums };
  const outcomeSum = { ...monthlySums };

  expenses.expensesList.map(({ date, amount, type }) => {
    let month = date.split("-");
    month = getMonthName(month[1]).toLowerCase();
    return type === INCOME
      ? (incomeSum[month] = incomeSum[month].add(currency(amount)))
      : (outcomeSum[month] = outcomeSum[month].add(currency(amount)));
  });

  return {
    incomeSum: Object.entries(incomeSum).map((summary) => summary[1].value),
    outcomeSum: Object.entries(outcomeSum).map((summary) => summary[1].value),
  };
};

export default ExpenseChart;
