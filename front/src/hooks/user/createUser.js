export default async function CreateUser(newUser, setUserSession) {
  return await fetch("/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.errors) {
        return {
          response: "FAILED",
          errors: response.errors,
        }
      }
      setUserSession(response.email, response.password);
      return { response: "CREATED" };
    })
    .catch((error) => {
      console.error(`Could not create account, ${error}`)
      return "FAILED";
    });
}
