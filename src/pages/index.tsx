import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>US Keyborad typing practice app</title>
      </Head>
      <h1>{data}</h1>
    </>
  );
}
