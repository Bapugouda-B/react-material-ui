import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const CardMui = () => {
  return (
    //  Box - used as a container
    <Box width="300px">
      {/* Card Component - represents a card-like container. */}
      <Card>
        {/* CardMedia Component - display an image within the card */}
        <CardMedia
          component="img"
          height="150"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />

        {/* CardContent Component - main content of the card */}
        <CardContent>
          {/* Typography Component (Heading) */}
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>

          {/* Typography Component (Body Text) */}
          <Typography variant="body2" color="text.secondary">
            React is a JavaScript library for building user interfaces. React
            can be used as a base in the development of single-page or mobile
            applications.
          </Typography>
        </CardContent>

        {/* CardActions component - contains buttons or actions associated with the card */}
        <CardActions>
          {/* Button Component (Share Button) */}
          <Button size="small">Share</Button>

          {/* Button Component (Learn More Button) */}
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardMui;
