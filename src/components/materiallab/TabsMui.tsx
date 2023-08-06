import { Box, Tab, Typography } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite"
import EmailIcon from "@mui/icons-material/Email"

const TabsMui = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box my={2}>
      <Typography variant="h5" color="error">
        Tabs example
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width:"600px"}}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Tabs one" value="1" icon={<FavoriteIcon />} iconPosition="start" />
            <Tab label="Tabs Two" value="2" icon={<EmailIcon />} iconPosition="end"/>
            <Tab label="Tabs Three" value="3" disabled />
            <Tab label="Tabs Three" value="4"  />
            <Tab label="Tabs Three" value="5" />
            <Tab label="Tabs Three" value="6"  />
            <Tab label="Tabs Three" value="7"  />
            <Tab label="Tabs Three" value="8"  />
          </TabList>
        </Box>
        <TabPanel value="1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          quisquam.
        </TabPanel>
        <TabPanel value="2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          tempora?
        </TabPanel>
        <TabPanel value="3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sed.
        </TabPanel>
        <TabPanel value="4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sed.
        </TabPanel><TabPanel value="5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sed.
        </TabPanel><TabPanel value="6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sed.
        </TabPanel><TabPanel value="7">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sed.
        </TabPanel><TabPanel value="8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, sed.
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default TabsMui;
