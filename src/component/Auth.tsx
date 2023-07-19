import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const jwt_token = axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          withCredentials: true,
        }
      );
      console.log("login!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="./signup">
          Sign up
        </Button>
        <span>OR</span>
        <TextField
          id="foutlined-basic"
          label="email"
          variant="outlined"
          onChange={handleEmailChange}
        />
        <TextField
          id="foutlined-basic"
          label="password"
          variant="outlined"
          onChange={handlePasswordChange}
        />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Stack>
    </>
  );
};
