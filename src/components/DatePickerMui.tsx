import { Stack, TextField, TextFieldProps } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const DatePickerMui = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null);

  console.log({ selectedTime: selectedTime && selectedTime.toLocaleDateString() });

  return (
    <Stack spacing={4} sx={{ width: "250px" }} my={2}>
      <DatePicker
        label="Date picker"
        renderInput={(params: TextFieldProps) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue: Date | null) => {
          setSelectedDate(newValue);
        }}
      />
      <TimePicker
        label="Time picker"
        renderInput={(params: TextFieldProps) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue: Date | null) => {
          setSelectedTime(newValue);
        }}
      />
       <DateTimePicker
        label="Date Time picker"
        renderInput={(params: TextFieldProps) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue: Date | null) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default DatePickerMui;
