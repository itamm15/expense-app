export function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(parseInt(monthNumber) - 1);

  return date.toLocaleString([], { month: "long" });
}
