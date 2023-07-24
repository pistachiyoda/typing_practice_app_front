import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export const LessonSelect: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Stack spacing={2} direction="column" sx={{ mr: "10px" }}>
          <Button variant="contained" color="secondary" size="large">
            Lesson 1
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 2
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 3
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 4
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 5
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 6
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 7
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 8
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 9
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Lesson 10
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          component="h2"
          color={theme.typography.h2.color}
          gutterBottom
        >
          Lesson1: Lefthand practice
        </Typography>
        <Stack spacing={2} direction="column">
          <Image
            src="/images/pixta_94788428_M.jpg"
            width={1000}
            height={423}
            alt="us_keyboard"
          />

          <Box display="flex" justifyContent={"center"}>
            <Button
              variant="contained"
              size="large"
              sx={{ fontSize: "2rem", width: "80%" }}
            >
              Start
            </Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
