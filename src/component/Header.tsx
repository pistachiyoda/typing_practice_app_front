import { Auth } from "./Auth";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <>
      {isHome ? (
        <>
          <Auth />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
