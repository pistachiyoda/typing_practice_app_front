import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  // userInfoがnullだったらログインしていない
  const getUserInfo = () => {
    try {
      const userInfo = axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
        { withCredentials: true }
      );
      if (userInfo) return userInfo;
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    try {
      const jwt_token = await axios.post(
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
      setUserInfo();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const logout = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      console.log("logout!");
      setIsLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setUserInfo = async () => {
    try {
      const userInfo = await getUserInfo();
      if (userInfo) setIsLogin(true);
      if (!userInfo) return;
      console.log(userInfo.data.email);
      setUserName(userInfo.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  // ページがマウントされた後に実行される処理を記述
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await setUserInfo();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      {isLogin ? (
        <>
          <Stack direction="row" spacing={2}>
            <Typography variant="h6" component="h2" gutterBottom>
              {userName}
            </Typography>
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        </>
      ) : (
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
      )}
    </>
  );
};
