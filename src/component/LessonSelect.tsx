import { Grid, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LessonButton } from "./LessonButton";
import { LessonDetail } from "./LessonDetail";
import { useState } from "react";

export const LessonSelect: React.FC = () => {
  const theme = useTheme();
  const [lessonNumber, setLessonNumber] = useState(1);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack spacing={2} direction="column" sx={{ mr: "10px" }}>
          <LessonButton lessonNumber={1} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={2} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={3} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={4} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={5} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={6} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={7} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={8} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={9} setLessonNumber={setLessonNumber} />
          <LessonButton lessonNumber={10} setLessonNumber={setLessonNumber} />
        </Stack>
      </Grid>
      <LessonDetail lessonNumber={lessonNumber}></LessonDetail>]
    </Grid>
  );
};
