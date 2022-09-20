import React from "react";
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 31,
    padding: 5,
    background: "#337743",
  },
}));

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={320}>
        <Typography
          fontWeight={300}
          variant="h6"
          style={{
            padding: "2px 0 2px 8px",
            borderBottom: "1px solid #0e64d2",
          }}
        >
          {" "}
          Online Freinds
        </Typography>
        <AvatarGroup
          max={6}
          sx={{ justifyContent: "flex-end", margin: "20px 0 35px 0" }}
        >
          <Avatar alt="Remy Sharp" src="image/tm1.jpg" />
          <Avatar alt="Trevor Henderson" src="" />
          <Avatar alt="Travis Howard" src="image/tm2.jpg" />
          <Avatar alt="Cindy Baker" src="image/tm5.jpg" />
          <Avatar alt="Agnes Walker" src="image/tm8.jpg" />
          <Avatar alt="Agnes Walker" src="image/tm4.jpg" />
          <Avatar alt="Agnes Walker" src="image/tm4.jpg" />
          <Avatar alt="Agnes Walker" src="image/tm4.jpg" />
        </AvatarGroup>

        <Typography
          variant="h6"
          fontWeight={300}
          style={{
            padding: "2px 0 2px 8px",
            borderBottom: "1px solid #0e64d2",
          }}
        >
          {" "}
          Messaging
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="image/user1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Sandra Adams"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra :
                  </Typography>
                  {"  I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge overlap="circular" badgeContent=" " variant="dot">
                <Avatar alt="Remy Sharp" src="" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Alex Scott"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Alex :
                  </Typography>
                  {"Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <StyledBadge overlap="circular" badgeContent=" " variant="dot">
                <Avatar alt="Ali Connors" src="image/tm1.jpg" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText
              primary="Ali Connors"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali :
                  </Typography>
                  {"   Do you have Paris neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="image/user3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Remy Sharp"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Remy :
                  </Typography>
                  {"  I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
