import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import {
  EmojiEmotions,
  PersonAdd,
  VideoCameraBack,
  Image,
} from "@mui/icons-material";
import { Avatar, Box, Button, Fab, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 20,
});
const style = {
  width: 400,
  height: 300,
  padding: 3,
  borderRadius: "8px",
};
function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: "30px",
          left: { xs: "41%", sm: "35px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant="h6" color="gray" mb={2}>
            Create post
          </Typography>
          <StyledBox>
            <Avatar src="image/u.jpg" sx={{ width: 50, height: 50 }}></Avatar>
            <Typography fontWeight={500} variant="span">
              Sarah Doe
            </Typography>
          </StyledBox>
          <TextField
            sx={{ width: "100%", marginBottom: "12px" }}
            multiline
            rows={2}
            placeholder="Say Something..."
            variant="standard"
          />
          <Stack
            direction="row"
            gap={2}
            sx={{
              "&:hover": { cursor: "pointer" },
              marginBottom: "50px",
            }}
          >
            <EmojiEmotions color="error" />
            <Image color="success" />
            <VideoCameraBack color="secondary" />
            <PersonAdd color="primary" />
          </Stack>
          <Button variant="contained">Post</Button>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
