import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { LessonModal } from "./LessonModal";
import lessonInfo from "../data/lessonInfo";

export const LessonDetail: React.FC<{
  lessonNumber: number;
}> = ({ lessonNumber }) => {
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
            height={424}
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
