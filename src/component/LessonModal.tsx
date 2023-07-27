import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Stack, SxProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const style: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 860,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const wrongStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "red",
  transition: "background-color 0.5s ease",
};

interface LessonInfo {
  lessonNumber: number;
  title: string;
  image: string;
  keys: string[];
}

export const LessonModal: React.FC<{
  open: boolean;
  handleClose: () => void;
  lessonInfo: LessonInfo;
  randomStrings: string[];
}> = ({ open, handleClose, lessonInfo, randomStrings }) => {
  const { lessonNumber, keys } = lessonInfo;

  const splitedRandomStrings: string[][] = randomStrings.reduce(
    (result: string[][], item: string, index: number) => {
      const chunkIndex = index % 4;

      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }
      result[chunkIndex].push(item);

      return result;
    },
    []
  );

  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const [currentStringsIndex, setCurrentStringsIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const checkInputKey = (inputKey: string, currentKey: string) => {
    if (inputKey === currentKey) {
      console.log("correct!");
      setCurrentKeyIndex((prev) => prev + 1);
    } else {
      console.log("wrong!");
      setWrongKey(inputKey);
      setTimeout(() => {
        setWrongKey(null);
      }, 500);
    }
  };

  const showEndModal = () => {
    console.log("end");
  };

  useEffect(() => {
    console.log("useEffect");
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(splitedRandomStrings);
      console.log("current strings index:", currentStringsIndex);
      console.log("current key index:", currentKeyIndex);
      console.log("current key: ", splitedRandomStrings[currentKeyIndex]);
      console.log("input key:", e.key);
      checkInputKey(
        e.key,
        splitedRandomStrings[currentStringsIndex][currentKeyIndex]
      );
      if (currentStringsIndex === 3 && currentKeyIndex === 12) {
        setIsEnd(true);
        showEndModal();
      }
      if (currentKeyIndex === 13) {
        setCurrentKeyIndex(0);
        setCurrentStringsIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    currentKeyIndex,
    currentStringsIndex,
    splitedRandomStrings,
    keys,
    lessonNumber,
  ]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={wrongKey ? wrongStyle : style}>
          {isEnd ? (
            <>
              <div>end!</div>
            </>
          ) : (
            <>
              <Stack direction="row">
                {splitedRandomStrings[currentStringsIndex].map((key, index) => {
                  return (
                    <>
                      {index < currentKeyIndex ? (
                        <Typography
                          key={index}
                          sx={{
                            fontSize: "100px",
                            color: "#BFBFBF",
                          }}
                        >
                          {key === " " ? <>□</> : key}
                        </Typography>
                      ) : (
                        <Typography key={index} sx={{ fontSize: "100px" }}>
                          {key === " " ? <>□</> : key}
                        </Typography>
                      )}
                    </>
                  );
                })}
              </Stack>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};
