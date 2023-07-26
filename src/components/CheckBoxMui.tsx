import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const CheckBoxMui = () => {
  const [acceptTandC, setAcceptTandC] = useState(false);
  console.log({ acceptTandC });

  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });

  //ChangeEvent: object represents a change event.
  //<HTMLInputElement>: generic type parameter that specifies the type of the event's target element.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTandC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the index of the selected skill in the "skills" array
    const index = skills.indexOf(event.target.value);

    // If the selected skill is not already in the "skills" array (index === -1),
    // add it to the array using the spread operator and setSkills.
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      // If the selected skill is already in the "skills" array,
      // remove it from the array using the "filter" method and setSkills.
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      {/* Checkbox for accepting terms and conditions */}
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox
              size="small"
              color="secondary"
              checked={acceptTandC}
              onChange={handleChange}
            />
          }
        />
      </Box>
      {/* Another custom-styled Checkbox for accepting terms and conditions */}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTandC}
          onChange={handleChange}
        />
      </Box>
      {/* Checkboxes for selecting skills */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              value="javascript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CheckBoxMui;
