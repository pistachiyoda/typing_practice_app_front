import { Container } from "@mui/material";
import { Header } from "./Header";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>US Keyborad typing practice app</title>
      </Head>
      <Container maxWidth="lg">
        <Header />
        <main>{children}</main>
      </Container>
    </>
  );
};
