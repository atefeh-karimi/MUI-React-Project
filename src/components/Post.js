import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
function Post({ name, body, url }) {
  return (
    <Card sx={{ margin: "20px" }} position="absolute">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            {name.charAt(0)}
          </Avatar>
        }
        title={name}
        subheader="September 19, 2022"
      />
      <CardMedia component="img" height="20%" image={url} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{ "&:hover": { color: "#1976d2" } }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
