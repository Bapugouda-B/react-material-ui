import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const ListMui = () => {
  return (
    // Container Box with specific width and background color
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      {/* List to hold individual list items */}
      <List>
        {/* First list item with avatar */}
        <ListItem disablePadding>
          {/* ListItemButton makes the entire item clickable */}
          <ListItemButton>
            {/* ListItemIcon to display an icon before text */}
            <ListItemIcon>
              {/* ListItemAvatar to wrap the Avatar */}
              <ListItemAvatar>
                {/* Avatar component represents the user's avatar */}
                <Avatar>
                  {/* MailIcon used as the avatar image */}
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            {/* ListItemText displays the primary and secondary text */}
            <ListItemText
              primary="List item 1"
              secondary="Secondary text"
            ></ListItemText>
          </ListItemButton>
        </ListItem>
        {/* Divider to separate list items */}
        <Divider />
        {/* Second list item with avatar */}
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List item 2"
            secondary="Secondary text"
          ></ListItemText>
        </ListItem>
        {/* Divider to separate list items */}
        <Divider />
        {/* Third list item with avatar */}
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary="List item 3"
            secondary="Secondary text"
          ></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default ListMui;
