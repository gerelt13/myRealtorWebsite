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
      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        console.log(data);
        router.push("/");
      } else if (res.status === 401) {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (res.status === 200) {
        router.push("/forgot-password");
      } else if (res.status === 401) {
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
      sx={{
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          // backgroundImage: "url(/realtorHouse3.jpg)",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          filter: "brightness(0.5)",
        },
      }}
    >
      <video

        id="vjs_video_3_html5_api"
        className="vjs-tech"
        loop
        muted
        autoPlay
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -2,
          width: "100%",

        }}
      >
        <source src="https://cdn.pixabay.com/video/2020/02/05/31991-389724767_large.mp4" type="video/mp4" />
      </video>
      <Stack
        spacing={4}
        justifyContent="center"
        alignItems="center"
        height="100%"
        width="100%"
        position="relative"
        zIndex={1}
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
          Login
        </Button>
        <Button onClick={handleForgotPassword}>Forgot Password</Button>
      </Stack>
    </Stack>
  );
}
