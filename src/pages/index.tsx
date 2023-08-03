import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "@/component/Layout";
import { LessonSelect } from "@/component/LessonSelect";
import { LessonDetail } from "@/component/LessonDetail";

export default function Home() {
  const [data, setData] = useState([]);
  const [lessonNumber, setLessonNumber] = useState(1);

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
      <Layout>
        <LessonSelect setLessonNumber={setLessonNumber}>
          <LessonDetail lessonNumber={lessonNumber}></LessonDetail>
        </LessonSelect>
      </Layout>
    </>
  );
}
