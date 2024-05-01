"use client";
import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (res.status == 200) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        router.push("/login");
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
      <video
        loop
        muted
        autoPlay
        style={{
          position: "absolute",
          // top: 0,
          // left: 0,
          bottom: 0,
          right: 0,

          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source
          src="https://cdn.pixabay.com/video/2023/03/06/153495-805688516_large.mp4"
          type="video/mp4"
        />
      </video>

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
        style={{ width: "500px", color: "black" }}
        variant="contained"
        onClick={handleRegister}
      >
        {" "}
        Register{" "}
      </Button>
    </Stack>
  );
}
