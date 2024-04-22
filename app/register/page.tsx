"use client";
import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

import { ChangeEventHandler, useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, {
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

  

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <TextField
        style={{ width: "500px" }}
        label="Email Address"
        onChange={(event) => setUseName(event.target.value)}
      />
      <TextField
        style={{ width: "500px" }}
        label="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        style={{ width: "500px", backgroundColor: "red" }}
        variant="contained"
        onClick={handleRegister}
      >
        {" "}
        Register{" "}
      </Button>
    </Stack>
  );
}
