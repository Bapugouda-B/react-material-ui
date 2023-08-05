import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const SkeletonMui = () => {
  // State to control the loading state of the component
  const [loading, setLoading] = useState(true);

  // useEffect hook to simulate loading and update the loading state after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    //   <Stack spacing={1} width="250px" mt={2}>
    //   <Skeleton variant="text" />
    //   <Skeleton variant="circular" width={40} height={40} />
    //   <Skeleton variant="rectangular" width={250} height={125} />
    //   {/* adding animation for Skeleton */}
    //   <Skeleton variant="text" animation={false} />
    //   <Skeleton variant="circular" width={40} height={40} animation="wave" />
    //   <Skeleton
    //     variant="rectangular"
    //     width={250}
    //     height={125}
    //     animation="wave"
    //   />
    // </Stack>

    <Box sx={{ width: "250px" }} my={2}>
      {/* Conditional rendering of Skeleton or actual image */}
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={256}
          animation="wave"
        />
      ) : (
        <img
          src="https://source.unsplash.com/random/256x144"
          alt="skeleton"
          width={256}
          height={144}
        />
      )}

      {/* Stack to display Avatar and text */}
      <Stack
        spacing={1}
        direction="row"
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {/* Conditional rendering of Avatar or Avatar Skeleton */}
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>R</Avatar>
        )}

        {/* Stack to display text content */}
        <Stack sx={{ width: "80%" }}>
          {/* Conditional rendering of Typography or Typography Skeleton */}
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React Skeleton MUI</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SkeletonMui;
