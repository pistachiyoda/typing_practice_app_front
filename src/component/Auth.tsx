import { Button, Stack, TextField, Typography } from "@mui/material";

export const Auth: React.FC = () => {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" href="./signup">
          Sign up
        </Button>
        <span>OR</span>
        <TextField id="foutlined-basic" label="email" variant="outlined" />
        <TextField id="foutlined-basic" label="password" variant="outlined" />
        <Button variant="contained" href="./signup">
          Login
        </Button>
      </Stack>
    </>
  );
};
