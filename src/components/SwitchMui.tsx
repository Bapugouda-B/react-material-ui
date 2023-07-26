import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const SwitchMui = () => {
  const [checked, setCheked] = useState(false);

  const handleChange = (evet: React.ChangeEvent<HTMLInputElement>) => {
    setCheked(evet.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} onChange={handleChange}  size="small" color="success"/>}
      />
    </Box>
  );
};

export default SwitchMui;
