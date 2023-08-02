import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const Auth: React.FC<{
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}> = ({ isLogin, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          <Stack direction="row" spacing={2} sx={{ mb: "30px" }}>
            <Box display="flex" sx={{ justifyContent: "space-between" }}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ m: "10px" }}
              >
                {userName}
              </Typography>
              <Box display="flex" sx={{ gap: "20px" }}>
                <Button variant="contained">Dashboard</Button>
                <Button variant="contained">Setting</Button>
                <Button variant="outlined" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <Stack direction="row" spacing={2} sx={{ mb: "30px" }}>
            <Button variant="contained" href="./signup">
              Sign up
            </Button>
            <Box display="flex" alignItems="center">
              <span>OR</span>
            </Box>
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
