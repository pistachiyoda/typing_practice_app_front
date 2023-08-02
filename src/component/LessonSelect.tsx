import { Grid, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LessonButton } from "./LessonButton";
import { LessonDetail } from "./LessonDetail";
import { useState } from "react";
import lessonInfo from "@/data/lessonInfo";

export const LessonSelect: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const theme = useTheme();
  const [lessonNumber, setLessonNumber] = useState(1);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack spacing={1} direction="column" sx={{ mr: "10px" }}>
          {lessonInfo.map((lesson, index) => (
            <LessonButton
              key={index}
              lessonNumber={index + 1}
              setLessonNumber={setLessonNumber}
            ></LessonButton>
          ))}
        </Stack>
      </Grid>
      <LessonDetail
        lessonNumber={lessonNumber}
        isLogin={isLogin}
      ></LessonDetail>
    </Grid>
  );
};
