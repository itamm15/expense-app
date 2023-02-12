export default async function createUser(newUser) {
  console.log(newUser);
  await fetch("/users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response, "response");
    });
}
