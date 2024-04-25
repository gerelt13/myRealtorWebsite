"use client";
import { useSearchParams } from "next/navigation";

import { Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      return;
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      console.log(data);

      router.push("/login");
    } catch (error) {
      console.error("Error in resetting password:", error);
    }
  };

  return (
    <Stack
      spacing={4}
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: "url(/interiorRealtor.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >


      
      <TextField
        style={{ width: "500px" }}
        label="New Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        style={{ width: "500px" }}
        label="Confirm New Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        style={{ color: "black", width: "500px", backgroundColor: "#d0f0c0" }}
        variant="contained"
        onClick={handleResetPassword}
      >
        Reset Password
      </Button>
    </Stack>
  );
};

export default ResetPassword;
