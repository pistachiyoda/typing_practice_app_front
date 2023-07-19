import { Box, Typography } from "@mui/material";
import { Auth } from "./Auth";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        US Keyborad typing practice app
      </Typography>
      {isHome ? (
        <>
          <Auth />
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
