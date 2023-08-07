import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({theme}) =>({
    height: '250px',
    width: '250px',
    backgroundColor: theme.palette.neutral?.darker,
}))
 
const ResponsivenessMui = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0
            sm: 200, // viewport width is above 600
            md: 300, // viewport width is above 900
            lg: 400, // viewport width is above 1200
            xl: 500, // viewport width is above 1536
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox>
        
      </StyledBox>
    </>
  );
};

export default ResponsivenessMui;
