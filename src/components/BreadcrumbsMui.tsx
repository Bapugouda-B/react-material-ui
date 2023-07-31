import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const BreadcrumbsMui = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" />}
        maxItems={2}
        itemsAfterCollapse={2}
        // itemsBeforeCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Shoes
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        
        <Typography color="text.primary">Accessories</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsMui;
