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
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import Notifications from "@mui/icons-material/Notifications";

const ToolBarStyle = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
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
          NavBar
        </Typography>{" "}
        <MenuIcon sx={{ display: { sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search…" />
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
            src="image/u.jpg"
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
