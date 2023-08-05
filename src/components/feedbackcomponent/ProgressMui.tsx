import { Stack, CircularProgress, LinearProgress } from "@mui/material"

const ProgressMui = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success"/>
      <CircularProgress variant="determinate" value={60} color="success"/>
      <LinearProgress />
      <LinearProgress color="error"/>
      <LinearProgress variant="determinate" value={50}/> 
    </Stack>
  )
}

export default ProgressMui
