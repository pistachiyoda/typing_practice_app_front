import { useState } from "react";
import { Auth } from "./Auth";
import { useRouter } from "next/router";
import axios from "axios";

export const Header: React.FC = () => {
  const router = useRouter();
  const isSignup = router.pathname === "/signup";
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

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

  // Headerコンポーネントに持っていって、HeaderでisLoginを管理する
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

  return (
    <>
      {!isSignup ? (
        <>
          <Auth
            isLogin={isLogin}
            setIsLogin={setIsLogin}
            setUserInfo={setUserInfo}
            userName={userName}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
