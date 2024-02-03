"use server";

import { redirect } from "next/navigation";

export const loginUser = async (e) => {
  const phone = e.get("phone").toString();
  const password = e.get("password").toString();

  const loginUser = {
    password,
    phone,
  };

  const res = await fetch("http://127.0.0.1:8000/login", {
    method: "POST",
    body: JSON.stringify(loginUser),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    redirect("/");
  }
};
