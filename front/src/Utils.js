export function getMonthName(monthNumber) {
  const date = new Date();
  date.setMonth(parseInt(monthNumber) - 1);

  return date.toLocaleString([], { month: "long" });
}

export function getSession() {
  // TODO: In future encrypt both data and store it on backend
  const userEmail = localStorage.getItem("email");
  const userPassword = localStorage.getItem("password");
  const userId = localStorage.getItem("id");
  if (userEmail === null || userPassword === null || userId === null) return undefined;
  return { userEmail, userPassword, userId };
}

export function setUserSession({email, password, id}) {
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("id", id);
}
