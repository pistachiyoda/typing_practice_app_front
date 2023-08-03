import { Box, Container, Typography } from "@mui/material";
import { Header } from "./Header";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

export const Layout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>US Keyborad typing practice app</title>
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            color={theme.typography.h1.color}
          >
            US Keyborad typing practice app
          </Typography>
        </Box>
        <Header />
        <main>{children}</main>
      </Container>
    </>
  );
};
