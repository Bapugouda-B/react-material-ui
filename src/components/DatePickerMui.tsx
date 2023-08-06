import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useState } from "react";

const DatePickerMui = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Box>
      <Typography variant="h5" color="secondary" align="center" my={2}>
        MUI Date Picker Example
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          minDate={dayjs("2022-08-22")}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props: any) => <TextField {...props} />}
        />

        <MobileDatePicker
          label="Mobile Date Picker"
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
          renderInput={(props: any) => <TextField {...props} />}
        />
        <DesktopDatePicker
          label="Desktop Date Picker"
          openTo="year"
          views={["month", "year"]}
          value={value}
          onChange={(newValue: any) => setValue(newValue)}
          renderInput={(props: any) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerMui;
