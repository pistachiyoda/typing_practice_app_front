import axios from "axios";
import React, { useState } from "react";
import { Layout } from "@/component/Layout";
import { Stack, TextField, Box, Button } from "@mui/material";
import Router from "next/router";

export default function Home() {
  const deleteAccount = async () => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/delete`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        window.alert("アカウントを削除しました。");
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
        <Button variant="contained" color="secondary" onClick={deleteAccount}>
          アカウントを削除する
        </Button>
      </Layout>
    </>
  );
}
