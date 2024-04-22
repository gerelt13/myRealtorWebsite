"use client";

import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status == 200) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        console.log(data);
        router.push("/");
      } else if (res.status == 401) {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error(error); 
    }
  };


  const handleForgotPassword = () => {
    const res =  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    
    router.push("/forgot-password");
  };

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: "url(/realtorHouse3.jpg)",
        backgroundSize: "auto",
        backgroundPosition: "center",

      }}
    >
      <TextField
        style={{ width: "500px" }}
        label="Email Address"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        style={{ width: "500px" }}
        label="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        style={{ width: "500px", backgroundColor: "#add8e6" }}
        variant="contained"
        onClick={handleLogin}
      >
        {" "}
        Login{" "}
      </Button>

          <Button onClick={handleForgotPassword}>Forgot Password</Button>
    </Stack>
  );
}
