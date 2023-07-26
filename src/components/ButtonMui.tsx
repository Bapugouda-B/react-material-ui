import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlineIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

const ButtonMui = () => {
//   const [formats, setFormats] = useState<string[]>([]);
  const [formats, setFormats] = useState<string | null>(null);

  console.log({ formats });

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updateFormats: string | null
  ) => {
    setFormats(updateFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Sucess
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<LocalShippingIcon />}
          disableRipple
          onClick={() => alert("cliked")}
        >
          Delivery
        </Button>
        <Button
          variant="contained"
          endIcon={<LocalShippingIcon />}
          disableElevation
        >
          Delivery
        </Button>
        <IconButton arial-label="delivery" color="success" size="small">
          <LocalShippingIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          arial-label="alignment button group"
        >
          <Button onClick={() => alert("Left clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          arial-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="primary"
          orientation="vertical"

        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlineIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default ButtonMui;
