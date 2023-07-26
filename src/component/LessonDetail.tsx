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

  // 各レッスンの情報をオブジェクトで定義しておく
  const lessonInfo = [
    {
      lessonNumber: 1,
      title: "Lesson1: Left Hand practice",
      image: "/images/1.png",
      keys: ["a", "s", "d", "f", " "],
    },
    {
      lessonNumber: 2,
      title: "Lesson2: Right Hand Practice",
      image: "/images/2.png",
      keys: ["j", "k", "l", ";", "space"],
    },
    {
      lessonNumber: 3,
      title: "Lesson3: Both Hand practice",
      image: "/images/3.png",
      keys: ["a", "s", "d", "f", "j", "k", "l", ";", "space"],
    },
    {
      lessonNumber: 4,
      title: "Lesson4: G and H Keys practice",
      image: "/images/4.png",
      keys: ["a", "s", "d", "f", "j", "k", "l", "g", "h", ";", "space"],
    },
    {
      lessonNumber: 5,
      title: "Lesson5: Apostrophe Key practice",
      image: "/images/5.png",
      keys: ["a", "s", "d", "f", "j", "k", "l", "g", "h", ";", "'", "space"],
    },
    {
      lessonNumber: 6,
      title: "Lesson6: Shift Keys practice",
      image: "/images/6.png",
      keys: [
        "a",
        "s",
        "d",
        "f",
        "j",
        "k",
        "l",
        "g",
        "h",
        "A",
        "S",
        "D",
        "F",
        "J",
        "K",
        "L",
        "G",
        "H",
        ";",
        ";",
        "'",
        '"',
        "space",
      ],
    },
    {
      lessonNumber: 7,
      title: "Lesson7: Left Hnad Top Row practice",
      image: "/images/7.png",
      keys: ["a"],
    },
    {
      lessonNumber: 8,
      title: "Lesson8: Right Hand Top Row practice",
      image: "/images/8.png",
      keys: ["a"],
    },
    {
      lessonNumber: 9,
      title: "Lesson9: Left Hand Bottom Row practice",
      image: "/images/9.png",
      keys: ["a"],
    },
    {
      lessonNumber: 10,
      title: "Lesson10: Right Hand Bottom Row practice",
      image: "/images/10.png",
      keys: ["a"],
    },
  ];

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
              onClick={handleOpen}
            >
              Start
            </Button>
          </Box>
        </Stack>
        <LessonModal
          open={open}
          handleClose={handleClose}
          lessonInfo={lessonInfo[lessonNumber - 1]}
        ></LessonModal>
      </Grid>
    </>
  );
};
