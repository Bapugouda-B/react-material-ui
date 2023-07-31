import { Stack, Link, Typography } from "@mui/material";

const LinkMui = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" variant="h3" underline="hover">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default LinkMui;
