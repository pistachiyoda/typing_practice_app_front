import axios from "axios";
import { useEffect, useState } from "react";
import { Layout } from "@/component/Layout";
import { LessonSelect } from "@/component/LessonSelect";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Stack, Typography } from "@mui/material";
import { LessonResult as ServerLessonResult } from "@prisma/client";

type LessonResult = Omit<ServerLessonResult, "createdAt"> & {
  createdAt: string;
};

interface lessonResultData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export default function Home() {
  const [lessonNumber, setLessonNumber] = useState(1);
  const [data, setData] = useState<lessonResultData | undefined>();
  const [userEmail, setUserEmail] = useState<string | undefined>();

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `レッスン${lessonNumber}`,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/lesson/${lessonNumber}`,
          { withCredentials: true }
        );
        if (res.data.length === 0) {
          setData(undefined);
          return;
        }

        const labels: string[] = res.data.map((result: LessonResult) =>
          new Date(result.createdAt).toLocaleString()
        );

        const newData = {
          labels,
          datasets: [
            {
              label: "ミス回数",
              data: res.data.map((result: LessonResult) => result.missCount),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "文字/秒",
              data: res.data.map((result: LessonResult) => result.speed),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        };
        setData(newData);
      } catch (error) {
        console.log(error);
      }
    };

    const getUserEmail = async () => {
      try {
        const userInfo = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
          { withCredentials: true }
        );
        if (userInfo) return setUserEmail(userInfo.data.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    getUserEmail();
  }, [lessonNumber]);

  useEffect(() => {
    const getUserEmail = async () => {
      try {
        const userInfo = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
          { withCredentials: true }
        );
        if (userInfo) setUserEmail(userInfo.data.email);
      } catch (error) {
        console.log(error);
      }
    };

    getUserEmail();
  }, []);

  return (
    <>
      <Layout>
        <LessonSelect setLessonNumber={setLessonNumber}>
          <Stack spacing={1} direction="column" sx={{ mb: "10px", ml: "20px" }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ m: "10px" }}
            >
              {userEmail}さんのレッスン結果
            </Typography>
            {data ? (
              <Line options={options} data={data} width={840} height={400} />
            ) : (
              <p>まだこのレッスンをしたことがありません。</p>
            )}
          </Stack>
        </LessonSelect>
      </Layout>
    </>
  );
}
