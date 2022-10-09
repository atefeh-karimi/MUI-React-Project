import React from "react";
import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      {content.map((c) => {
        return <Post key={c.id} {...c} />;
      })}
    </Box>
  );
}
const content = [
  {
    id: 1,
    name: "John Doe",
    body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.I be in the neighbourhood this week. Let's grab a bite to eat",
    image: "/image/gallery-img-1.jpg",
  },
  {
    id: 2,
    name: "Kevin Raoofi",
    body: "Let's grab a bite to eat!This impressive paella is a perfect party dish and a fun meal to cook together Let's grab a bite to eat! with your guests. Add 1 cup of frozen peas along with the mussels, if you like. Add 1 cup of frozen peas along with the mussels, if you like.I be in the neighbourhood this week. Let's grab a bite to eat",
    image: "/image/gallery-img-4.jpg",
  },
  {
    id: 3,
    name: "Kevin alberto",
    body: " Add 1 cup of frozen peas along with the mussels, if you like.I be in the neighbourhood this week. Let's grab a bite to eat.I'll be in the neighbourhood this week. Let's grab a bite to eat",
    image: "/image/gallery-img-6.jpg",
  },
  {
    id: 4,
    name: "Alberto gutierrez",
    body: "Let's grab a bite to eat .I'll be in the neighbourhood this week. Let's grab a bite to eat",
    image: "/image/gallery-img-2.jpg",
  },
];

export default Feed;
