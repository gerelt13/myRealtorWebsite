"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleForgotPassword = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        }
      );
      console.log("Reset password for email:", email);
      const { token } = await res.json();
      router.push(`/reset-password?token=${token}`);
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: "url(/blurRealtor.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography>Enter your email to forgot password</Typography>
      <TextField
        style={{ width: "500px" }}
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Button
        style={{ color: "black", width: "500px", backgroundColor: "#FF7276" }}
        variant="contained"
        onClick={handleForgotPassword}
      >
        Forgot Password
      </Button>
    </Stack>
  );
}
