import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";

export const Auth: React.FC<{
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  setUserInfo: () => void;
  userName: string;
}> = ({ isLogin, setIsLogin, setUserInfo, userName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
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

  const router = useRouter();
  const handleHomeClick = () => {
    router.push("/");
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
              <Box display="flex" sx={{ gap: "20px" }}>
                <IconButton onClick={handleHomeClick}>
                  <HomeIcon sx={{ fontSize: "44px" }} />
                </IconButton>
                <Button variant="contained" href="./dashboard">
                  Dashboard
                </Button>
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
