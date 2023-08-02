import { Auth } from "./Auth";
import { useRouter } from "next/router";

export const Header: React.FC<{
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}> = ({ isLogin, setIsLogin }) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      {isHome ? (
        <>
          <Auth isLogin={isLogin} setIsLogin={setIsLogin} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
