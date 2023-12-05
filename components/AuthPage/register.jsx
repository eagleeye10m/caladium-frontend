"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Register() {
  const [username, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          username,
          phone,
          email,
          password,
        },
        config,
      );
      console.log(data);
      alert("Registration success");
      // You might want to clear form or do some redirection here
    } catch (error) {
      console.log(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx

        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        alert("Registration failed: " + error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  }

  return (
    <form onSubmit={registerUser}>
      <input
        type="text"
        placeholder="Name"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)} // add phone input
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Register</button>
    </form>
  );
}
