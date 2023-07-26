import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const SelectComponentMui = () => {
    // State to hold the selected countries as an array
  const [countries, setCountries] = useState<string[]>([]);
 console.log(countries);

  // Event handler to update the selected countries when the user makes a selection
  // otherwise, use the value as it is (array of selected countries)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(','): value)
    }

  return (
    <Box width="200px">
        {/* Textfield with a dropdown menu for selecting countries */}
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="Australia">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default SelectComponentMui;
