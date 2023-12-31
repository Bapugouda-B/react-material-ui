import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

const ChipMui = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip label="chip" color="secondary" size="small" variant="outlined" />
      <Chip
        label="chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>R</Avatar>}
      />
      <Chip label="click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default ChipMui;
