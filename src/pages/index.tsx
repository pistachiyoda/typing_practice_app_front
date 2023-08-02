import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "@/component/Layout";
import { LessonSelect } from "@/component/LessonSelect";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

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
      <Layout isLogin={isLogin} setIsLogin={setIsLogin}>
        <LessonSelect isLogin={isLogin}></LessonSelect>
      </Layout>
    </>
  );
}
