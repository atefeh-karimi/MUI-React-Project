import React from "react";

import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  styled,
  Typography,
  Badge,
  Avatar,
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
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <EmailIcon />
          </Badge>
          <Badge
            badgeContent={1}
            color="error"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "33px", height: "33px" }}
            src="/broken-image.jpg"
          />
        </Icon>
      </ToolBarStyle>{" "}
    </AppBar>
  );
}

export default Navbar;
