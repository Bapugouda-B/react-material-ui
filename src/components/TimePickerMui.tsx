import React from "react";
import { TextField, Stack, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";

const TimePickerMui = () => {
  const [timeValue, setTimeValue] = useState<Date | null>(null);
  const [dateTimeValue, setDateTimeValue] = useState<Date | null>(null);
  return (
    <Box>
      <Stack spacing={2} mt={3} direction="row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select Time"
            value={timeValue}
            onChange={(newValue) => setTimeValue(newValue)}
            renderInput={(props: any) => <TextField {...props} />}
          />
        </LocalizationProvider>
      </Stack>
      <Stack spacing={2} mt={3} direction="row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Select Time"
            value={dateTimeValue}
            onChange={(newValue) => setDateTimeValue(newValue)}
            renderInput={(props: any) => <TextField {...props} />}
          />
        </LocalizationProvider>
      </Stack>
    </Box>
  );
};

export default TimePickerMui;
