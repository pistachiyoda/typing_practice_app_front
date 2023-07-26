import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Stack, SxProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const style: SxProps = {
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
}> = ({ open, handleClose, lessonInfo }) => {
  const { lessonNumber, keys } = lessonInfo;

  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [randomString, setRandomString] = useState<string[]>([]);
  const [wrongKey, setWrongKey] = useState<string | null>(null);

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

  useEffect(() => {
    const randomString = generateRandomString(10, keys);
    console.log(randomString);
    setRandomString(randomString);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(randomString);
      console.log("current key index:", currentKeyIndex);
      console.log("current key: ", randomString[currentKeyIndex]);
      console.log("input key:", e.key);
      checkInputKey(e.key, randomString[currentKeyIndex]);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentKeyIndex, randomString, keys, lessonNumber]);

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={wrongKey ? wrongStyle : style}>
          <Stack direction="row">
            {randomString.map((key, index) => {
              return (
                <>
                  {index < currentKeyIndex ? (
                    <Typography
                      key={index}
                      sx={{ fontSize: "100px", color: "#BFBFBF" }}
                    >
                      {key === " " ? <>&nbsp;</> : key}
                    </Typography>
                  ) : (
                    <Typography key={index} sx={{ fontSize: "100px" }}>
                      {key === " " ? <>&nbsp;</> : key}
                    </Typography>
                  )}
                </>
              );
            })}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
