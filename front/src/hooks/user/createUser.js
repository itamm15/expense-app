export default async function CreateUser(newUser, setSession) {
  return await fetch("/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((response) => {
      setSession(response.email, response.password);
      return "CREATED";
    })
    .catch((response) => {
      return "FAILED";
    });
}
