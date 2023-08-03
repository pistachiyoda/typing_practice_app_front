import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Stack, SxProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

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
  startTimer: () => void;
  endTimer: () => void;
  calcTime: () => number;
}> = ({
  open,
  handleClose,
  lessonInfo,
  randomStrings,
  startTimer,
  endTimer,
  calcTime,
}) => {
  const { lessonNumber, keys } = lessonInfo;
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const [currentStringsIndex, setCurrentStringsIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [missCount, setMissCount] = useState(0);

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

  const checkInputKey = (inputKey: string, currentKey: string) => {
    if (inputKey === "Shift") return;
    if (inputKey === currentKey) {
      console.log("correct!");
      setCurrentKeyIndex((prev) => prev + 1);
    } else {
      console.log("wrong!");
      setMissCount((prev) => prev + 1);
      setWrongKey(inputKey);
      setTimeout(() => {
        setWrongKey(null);
      }, 500);
    }
  };

  const sendLessonResult = async () => {
    try {
      const result = {
        lessonNo: lessonNumber,
        missCount: missCount,
        time: parseFloat(calcTime().toFixed(2)),
        speed: parseFloat((56 / calcTime()).toFixed(2)),
      };
      const ret = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/lesson/result`,
        result,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const retryLesson = async () => {
    setCurrentKeyIndex(0);
    setCurrentStringsIndex(0);
    setMissCount(0);
    startTimer();
    setIsEnd(false);
    try {
      sendLessonResult();
    } catch (error) {
      console.log(error);
    }
  };

  const endLesson = () => {
    setCurrentKeyIndex(0);
    setCurrentStringsIndex(0);
    setMissCount(0);
    setIsEnd(false);
    handleClose();
    try {
      sendLessonResult();
    } catch (error) {
      console.log(error);
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
      if (currentStringsIndex <= 3 && currentKeyIndex <= 13) {
        checkInputKey(
          e.key,
          splitedRandomStrings[currentStringsIndex][currentKeyIndex]
        );
      }

      if (currentStringsIndex === 3 && currentKeyIndex === 13) {
        setIsEnd(true);
        showEndModal();
        endTimer();
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
    endTimer,
  ]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={wrongKey ? wrongStyle : style}>
          {isEnd ? (
            <>
              <Stack direction="column">
                <Typography fontSize={"30px"}>ミス数: {missCount}</Typography>
                <Typography fontSize={"30px"}>
                  正答率: {56 / 56 + missCount}
                </Typography>
                <Typography fontSize={"30px"}>
                  タイム: {calcTime().toFixed(2)}秒
                </Typography>
                <Typography fontSize={"30px"}>
                  速さ: {(56 / calcTime()).toFixed(2)}文字/秒
                </Typography>
                <Stack direction="row" spacing={3} mt={4}>
                  <Button variant="outlined" size="large" onClick={retryLesson}>
                    もう一回練習する
                  </Button>
                  <Button variant="contained" size="large" onClick={endLesson}>
                    終了
                  </Button>
                </Stack>
              </Stack>
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
