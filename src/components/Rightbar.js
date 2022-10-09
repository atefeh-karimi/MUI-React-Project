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

const AnotherStyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
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
          {content.map((c) => {
            return (
              <Avatar alt={c.name} src={process.env.PUBLIC_URL + c.image} />
            );
          })}
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
          {content.map((c) => {
            return (
              c.body && (
                <>
                  <ListItem key={c.id} alignItems="flex-start">
                    <ListItemAvatar>
                      {c.online ? (
                        <AnotherStyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt={c.name}
                            src={process.env.PUBLIC_URL + c.image}
                          />
                        </AnotherStyledBadge>
                      ) : (
                        <Avatar
                          alt={c.name}
                          src={process.env.PUBLIC_URL + c.image}
                        />
                      )}
                    </ListItemAvatar>
                    <ListItemText
                      primary={c.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {c.name.split(" ")[0] + ": "}
                          </Typography>
                          {c.body.substring(0, 45) + "..."}
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              )
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
const content = [
  {
    id: 1,
    name: "Sandra Doe",
    body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.I be in the neighbourhood this week. Let's grab a bite to eat",
    online: true,
    image: "/image/user1.jpg",
  },
  {
    id: 2,
    name: "Kevin Raoofi",
    body: "a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels...",
    image: "/image/tm1.jpg",
  },
  {
    id: 3,
    name: "Remy alberto",
    body: "cook together with your guests. Add 1 cup of frozen...",
    image: "",
  },
  {
    id: 4,
    name: "Alberto gutierrez",
    body: `I'll be in your neighborhood doing errands this…`,
    image: "/image/user3.jpg",
  },
  {
    id: 5,
    name: "Alberto gutierrez",
    image: "/image/tm8.jpg",
  },
  {
    id: 6,
    name: "Alberto gutierrez",
    image: "",
  },
  {
    id: 7,
    name: "Alberto gutierrez",
    image: "/image/tm8.jpg",
  },
  {
    id: 8,
    name: "Alberto gutierrez",
    image: "/image/tm8.jpg",
  },
  {
    id: 9,
    name: "Alberto gutierrez",
    image: "/image/tm8.jpg",
  },
];
export default Rightbar;
