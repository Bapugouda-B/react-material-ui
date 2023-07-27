import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const AutoCompleteMui = () => {
  const [value, setValue] = useState<string | null>(null);

  const [skill, setSkill] = useState<Skill | null>(null);
  console.log({ skill });

  console.log({ value });

  // Displaying the two Autocomplete components with different options and states.

  return (
    <Stack spacing={2} width="250px">
      {/* Autocomplete for free-text input with skills array */}
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        // to write value in the field
        freeSolo
      />
      {/* Autocomplete with structured skills options */}
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default AutoCompleteMui;
