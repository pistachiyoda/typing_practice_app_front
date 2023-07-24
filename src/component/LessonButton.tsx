import { Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const LessonButton: React.FC<{
  lessonNumber: number;
  setLessonNumber: Dispatch<SetStateAction<number>>;
}> = ({ lessonNumber, setLessonNumber }) => {
  const selectLesson = (lessonNumber: number) => {
    setLessonNumber(lessonNumber);
  };
  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      onClick={() => selectLesson(lessonNumber)}
    >
      Lesson {lessonNumber}
    </Button>
  );
};
