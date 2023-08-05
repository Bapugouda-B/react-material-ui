import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const AlertMui = () => {
  return (
    <Stack spacing={2}>
      {/* Severity-based alerts */}
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is a success alert</Alert>

      {/* Variant-based alerts with outline */}
      <Alert variant="outlined" severity="error">
        This is an outlined error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an outlined success alert
      </Alert>

      {/* Filled alerts with custom close button */}
      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        This is a filled error alert with a custom close button
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a filled warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is a filled info alert
      </Alert>

      {/* Filled success alert with custom icon and action button */}
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button size="small" color="inherit">
            Undo
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is a filled success alert with a custom icon and action button
      </Alert>
    </Stack>
  );
};

export default AlertMui;
