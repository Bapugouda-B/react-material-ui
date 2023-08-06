import {
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const heights = [
  150, 30, 90, 70, 100, 130, 160, 60, 55, 40, 25, 50, 99, 80, 55,
];

const MasonryMui = () => {
  return (
    <Box sx={{ width: 500, minHeight: 400 }}>
        <Typography variant="h6" my={2}>Masonry Component</Typography>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{ minHeight: "height" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MasonryMui;
