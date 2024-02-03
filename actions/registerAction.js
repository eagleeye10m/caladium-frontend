"use server";
export const registerUser = async (e) => {
  const username = e.get("username").toString();
  const password = e.get("password");
  const phone = e.get("phone");
  const email = e.get("email");

  const newUser = {
    username,
    password,
    phone,
    email,
  };

  console.log(newUser);

  await fetch("http://127.0.0.1:8000/register", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
