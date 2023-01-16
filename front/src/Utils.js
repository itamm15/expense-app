export function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(parseInt(monthNumber) - 1);

  return date.toLocaleString([], { month: "long" });
}

export function getSession() {
  // TODO: In future encrypt both data and store it on backend
  const userEmail = localStorage.getItem("email");
  const userPassword = localStorage.getItem("password");
  if (userEmail === null) return undefined;
  return { userEmail, userPassword };
}

export function setSession(email, password) {
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
}
