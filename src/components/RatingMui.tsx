import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RatingMui = () => {
  // State to hold the selected value
  const [value, setValues] = useState<number | null>(null);
  //   readOnly
  //   const [value, setValues] = useState<number | null>(3);
  //   highlightSelectedOnly
  //   const [value, setValues] = useState<number | null>(5);

  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValues(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="small"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};

export default RatingMui;
