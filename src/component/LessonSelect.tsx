import { Grid, Stack } from "@mui/material";
import { LessonButton } from "./LessonButton";
import { Dispatch, ReactNode, SetStateAction } from "react";
import lessonInfo from "@/data/lessonInfo";

export const LessonSelect: React.FC<{
  children: ReactNode;
  setLessonNumber: Dispatch<SetStateAction<number>>;
}> = ({ children, setLessonNumber }) => {
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
      {children}
    </Grid>
  );
};
