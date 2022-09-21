import React from "react";
import {
  Home,
  Pages,
  Person,
  Settings,
  Storefront,
  AccountBox,
  Groups,
  ModeNight,
} from "@mui/icons-material";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import ContextMode from "../Context/ContextMode";

function Mylist() {
  const colorMode = React.useContext(ContextMode);

  return (
    <List
      sx={{
        // hover states
        "& .MuiListItemButton-root:hover": {
          bgcolor: "",
          "&, & .MuiListItemIcon-root": {
            color: "#1976d2",
          },
        },
      }}
    >
      {data.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch onClick={colorMode.toggleColorMode} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
const data = [
  { name: "HomePage", icon: <Home /> },
  { name: "Group", icon: <Groups /> },
  { name: "Pages", icon: <Pages /> },
  { name: "Marketplace", icon: <Storefront /> },
  { name: "Freinds", icon: <Person /> },
  { name: "Setting", icon: <Settings /> },
  { name: "Profile", icon: <AccountBox /> },
];

export default Mylist;
