import { Box, Stack, Divider, Grid, Paper } from "@mui/material";

const LayoutMui = () => {
  return (
    <Paper sx={{padding:"32px"}} elevation={6} >
      {/* Stack - container component for arranging elements vertically or horizontally */}
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {/* Box - serves as a wrapper component for most of the CSS utility needs */}
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          CodeBrother
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      {/* Grid Component - 12-column grid layout*/}
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box bgcolor="primary.dark" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Box bgcolor="primary.main" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs sm={6}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LayoutMui;
