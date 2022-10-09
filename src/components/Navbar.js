import React, { useState } from "react";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  styled,
  Typography,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import Notifications from "@mui/icons-material/Notifications";
import MyDrawer from "./Drawer";

const ToolBarStyle = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "end",
}));

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <ToolBarStyle>
        <Typography sx={{ display: { xs: "none", sm: "block" } }}>
          LOGO
        </Typography>{" "}
        <MyDrawer />
        <Search bgcolor={"background.default"} color={"text.primary"}>
          <InputBase sx={{ width: "100%" }} placeholder="Search…" />
        </Search>
        <Icon>
          <Badge
            badgeContent={4}
            color="error"
            sx={{
              "&:hover": { cursor: "pointer" },
              display: { xs: "none", sm: "block" },
            }}
          >
            <EmailIcon />
          </Badge>
          <Badge
            badgeContent={1}
            color="error"
            sx={{
              "&:hover": { cursor: "pointer" },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Notifications />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{
              "&:hover": { cursor: "pointer" },
              width: "33px",
              height: "33px",
            }}
            src={process.env.PUBLIC_URL + "/image/u.jpg"}
          />
        </Icon>
      </ToolBarStyle>{" "}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
