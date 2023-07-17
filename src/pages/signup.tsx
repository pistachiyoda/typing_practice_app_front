import axios from "axios";
import { useState } from "react";
import { Layout } from "@/component/Layout";
import { Stack, TextField, Box, Button } from "@mui/material";
import Router from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const createUser = async () => {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      window.alert("ユーザー登録が完了しました。");

      // ログインしてリダイレクト
      try {
        const jwt_token = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          formData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        document.cookie = `jwt_token=${jwt_token.data}`;
      } catch (error) {
        console.log(error);
      }

      Router.push("/");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <Box maxWidth="500px">
          <Stack spacing={2} direction="column">
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              onChange={handleEmailChange}
            />
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              onChange={handlePasswordChange}
            />
            <Button variant="contained" onClick={createUser}>
              Create
            </Button>
          </Stack>
        </Box>
      </Layout>
    </>
  );
}
