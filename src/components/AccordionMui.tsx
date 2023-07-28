// Importing required components and functions from Material-UI and React
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import { useState } from "react";
  
  const AccordionMui = () => {
    // Using React's useState hook to manage the state of the expanded panel
    const [expanded, setExpanded] = useState<string | false>(false);
  
    // Function to handle changes when an accordion panel is expanded or collapsed
    const handleChange = (isExpanded: boolean, panel: string) => {
      // If the panel is expanded, set its key as the current expanded state, otherwise set to false
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
        {/* First Accordion */}
        <Accordion
          expanded={expanded === "panel1"} // Check if the first panel is expanded
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")} // Call handleChange when the first panel is expanded or collapsed
        >
          {/* Accordion header */}
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />} // Icon displayed for expanding/collapsing the panel
          >
            <Typography>Accordion 1</Typography> {/* Text displayed in the header */}
          </AccordionSummary>
          {/* Accordion content */}
          <AccordionDetails>
            <Typography>
              {/* Content displayed when the first panel is expanded */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laborum autem repellendus assumenda tenetur quam in ducimus ea
              molestias at.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        {/* Second Accordion */}
        <Accordion
          expanded={expanded === "panel2"} // Check if the second panel is expanded
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")} // Call handleChange when the second panel is expanded or collapsed
        >
          {/* Accordion header */}
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />} // Icon displayed for expanding/collapsing the panel
          >
            <Typography>Accordion 2</Typography> {/* Text displayed in the header */}
          </AccordionSummary>
          {/* Accordion content */}
          <AccordionDetails>
            <Typography>
              {/* Content displayed when the second panel is expanded */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laborum autem repellendus assumenda tenetur quam in ducimus ea
              molestias at.
            </Typography>
          </AccordionDetails>
        </Accordion>
  
        {/* Third Accordion */}
        <Accordion
          expanded={expanded === "panel3"} // Check if the third panel is expanded
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")} // Call handleChange when the third panel is expanded or collapsed
        >
          {/* Accordion header */}
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />} // Icon displayed for expanding/collapsing the panel
          >
            <Typography>Accordion 3</Typography> {/* Text displayed in the header */}
          </AccordionSummary>
          {/* Accordion content */}
          <AccordionDetails>
            <Typography>
              {/* Content displayed when the third panel is expanded */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laborum autem repellendus assumenda tenetur quam in ducimus ea
              molestias at.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  
  export default AccordionMui;
  