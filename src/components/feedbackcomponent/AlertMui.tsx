import { Stack, Alert, AlertTitle } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check"

const AlertMui = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an error alert</Alert>
      <Alert severity="info">This is an error alert</Alert>
      <Alert severity="success">This is an error alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an error alert
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="success">
        <AlertTitle>Success</AlertTitle>
        This is an error alert
      </Alert>
    </Stack>
  );
};

export default AlertMui;
