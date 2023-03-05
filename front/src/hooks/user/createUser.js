import { CREATED, FAILED } from "../../constants/actions";

export default async function CreateUser(newUser, setUserSession) {
  return await fetch("/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((response) => {
      const values = {
        email: response.email,
        password: response.password,
        userId: response.id,
      };

      if (response.errors) {
        return {
          response: FAILED,
          errors: response.errors,
        };
      } else {
        setUserSession(values);
        return {
          response: CREATED,
          values: values,
        };
      }
    })
    .catch((error) => {
      console.error(`Could not create account, ${error}`);
      return "FAILED";
    });
}
