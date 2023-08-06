import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { Typography } from "@mui/material";

const TimelineMui = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.error">
          React Js
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Skill A
          </Typography>
          <Typography>It is Front-End library</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.error">
          MongoDB Js
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="error" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Skill B</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.error">
          Node Js
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot color="error" variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>Skill C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineMui;
