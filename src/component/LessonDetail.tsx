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

  const lessonTitles = [
    "Lesson1: Left Hand practice",
    "Lesson2: Right Hand Practice",
    "Lesson3: Both Hand practice",
    "Lesson4: G and H Keys practice",
    "Lesson5: Apostrophe Key practice",
    "Lesson6: Shift Keys practice",
    "Lesson7: Left Hnad Top Row practice",
    "Lesson8: Right Hand Top Row practice",
    "Lesson9: Left Hand Bottom Row practice",
    "Lesson10: Right Hand Bottom Row practice",
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
          {lessonTitles[lessonNumber - 1]}
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
        <LessonModal open={open} handleClose={handleClose}></LessonModal>
      </Grid>
    </>
  );
};
