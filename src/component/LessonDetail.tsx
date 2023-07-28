import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { LessonModal } from "./LessonModal";

export const LessonDetail: React.FC<{ lessonNumber: number }> = ({
  lessonNumber,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const startTimer = () => {
    setStartTime(Date.now());
  };

  const endTimer = () => {
    setEndTime(Date.now());
  };

  const calcTime = () => {
    return (endTime - startTime) / 1000;
  };

  // 各レッスンの情報をオブジェクトで定義しておく
  const spaceKey = " ";
  const leftHandPracticeKeys = ["a", "s", "d", "f"];
  const rightHandPracticeKeys = ["j", "k", "l", ";"];
  const leftHandTopRowKeys = ["q", "w", "e", "r", "t"];
  const rightHandTopRowKeys = ["y", "u", "i", "o", "p"];
  const leftHandBottomRowsKeys = ["z", "x", "c", "v", "b"];
  const nandMKeys = ["n", "m"];
  const gAndHKeys = ["g", "h"];
  const apostropheKeys = ["'", '"'];
  const colonKeys = [";", ":"];
  const commaKeys = [",", ".", "?"];

  const lessonInfo = [
    {
      lessonNumber: 1,
      title: "Lesson1: Left Hand practice",
      image: "/images/1.png",
      keys: [spaceKey, ...leftHandPracticeKeys],
    },
    {
      lessonNumber: 2,
      title: "Lesson2: Right Hand Practice",
      image: "/images/2.png",
      keys: [spaceKey, ...rightHandPracticeKeys, colonKeys[0]],
    },
    {
      lessonNumber: 3,
      title: "Lesson3: Both Hand practice",
      image: "/images/3.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
      ],
    },
    {
      lessonNumber: 4,
      title: "Lesson4: G and H Keys practice",
      image: "/images/4.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
      ],
    },
    {
      lessonNumber: 5,
      title: "Lesson5: Apostrophe Key practice",
      image: "/images/5.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
        apostropheKeys[0],
      ],
    },
    {
      lessonNumber: 6,
      title: "Lesson6: Shift Keys practice",
      image: "/images/6.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
        apostropheKeys[0],
        ...[
          ...leftHandPracticeKeys,
          ...rightHandPracticeKeys,
          ...gAndHKeys,
        ].map((val) => val.toUpperCase()),
      ],
    },
    {
      lessonNumber: 7,
      title: "Lesson7: Left Hnad Top Row practice",
      image: "/images/7.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
        apostropheKeys[0],
        ...leftHandTopRowKeys,
        ...[
          ...leftHandPracticeKeys,
          ...rightHandPracticeKeys,
          ...gAndHKeys,
          ...leftHandTopRowKeys,
        ].map((val) => val.toUpperCase()),
      ],
    },
    {
      lessonNumber: 8,
      title: "Lesson8: Right Hand Top Row practice",
      image: "/images/8.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
        apostropheKeys[0],
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...[
          ...leftHandPracticeKeys,
          ...rightHandPracticeKeys,
          ...gAndHKeys,
          ...leftHandTopRowKeys,
          ...rightHandTopRowKeys,
        ].map((val) => val.toUpperCase()),
      ],
    },
    {
      lessonNumber: 9,
      title: "Lesson9: Left Hand Bottom Row practice",
      image: "/images/9.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
        apostropheKeys[0],
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
        ...[
          ...leftHandPracticeKeys,
          ...rightHandPracticeKeys,
          ...gAndHKeys,
          ...leftHandTopRowKeys,
          ...rightHandTopRowKeys,
          ...leftHandBottomRowsKeys,
        ].map((val) => val.toUpperCase()),
      ],
    },
    {
      lessonNumber: 10,
      title: "Lesson10: Right Hand Bottom Row practice",
      image: "/images/10.png",
      keys: [
        spaceKey,
        ...leftHandPracticeKeys,
        ...rightHandPracticeKeys,
        colonKeys[0],
        ...gAndHKeys,
        apostropheKeys[0],
        ...leftHandTopRowKeys,
        ...rightHandTopRowKeys,
        ...leftHandBottomRowsKeys,
        ...nandMKeys,
        ...commaKeys,
        ...[
          ...leftHandPracticeKeys,
          ...rightHandPracticeKeys,
          ...gAndHKeys,
          ...leftHandTopRowKeys,
          ...rightHandTopRowKeys,
          ...leftHandBottomRowsKeys,
          ...nandMKeys,
        ].map((val) => val.toUpperCase()),
      ],
    },
  ];

  const generateRandomString = (length: number, keys: string[]): string[] => {
    let result: string[] = [];
    const keysLength = keys.length;

    // ２回実行される、なぜ？
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * keysLength);
      result.push(keys[randomIndex]);
    }
    // console.log(result);
    return result;
  };

  return (
    <>
      <Grid item>
        <Typography
          variant="h4"
          component="h2"
          color={theme.typography.h2.color}
          gutterBottom
        >
          {lessonInfo[lessonNumber - 1].title}
        </Typography>
        <Stack spacing={2} direction="column">
          <Image
            src={`/images/${lessonNumber}.png`}
            width={1000}
            height={423}
            alt="us_keyboard"
          />

          <Box display="flex" justifyContent={"center"}>
            <Button
              variant="contained"
              size="large"
              sx={{ fontSize: "2rem", width: "80%" }}
              onClick={() => {
                handleOpen(), startTimer();
              }}
            >
              Start
            </Button>
          </Box>
        </Stack>
        <LessonModal
          open={open}
          handleClose={handleClose}
          lessonInfo={lessonInfo[lessonNumber - 1]}
          randomStrings={generateRandomString(
            56,
            lessonInfo[lessonNumber - 1].keys
          )}
          startTimer={startTimer}
          endTimer={endTimer}
          calcTime={calcTime}
        ></LessonModal>
      </Grid>
    </>
  );
};
