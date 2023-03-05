export default async function CreateUser(newUser, setUserSession) {
  return await fetch("/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response, "response");
      if (response.errors) {
        return {
          response: "FAILED",
          errors: response.errors,
        };
      }
      const values = {
        email: response.email,
        password: response.password,
        id: response.id,
      };
      setUserSession(values);
      return { response: "CREATED", values: values };
    })
    .catch((error) => {
      console.error(`Could not create account, ${error}`);
      return "FAILED";
    });
}
