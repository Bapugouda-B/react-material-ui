import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

const LoadingButtonMui = () => {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loadingIndicator="Loading..." variant="outlined">
        Fetch Data
      </LoadingButton>
      <LoadingButton loadingIndicator="Loading..." variant="outlined" loading>
        Fetch Data
      </LoadingButton>
      <LoadingButton
        loadingIndicator="start"
        variant="outlined"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        loadingIndicator="start"
        variant="outlined"
        startIcon={<SaveIcon />}
        loading
      >
       Save
      </LoadingButton>
    </Stack>
  );
};

export default LoadingButtonMui;
