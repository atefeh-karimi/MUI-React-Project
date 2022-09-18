import React from "react";
import { Box } from "@mui/material";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      bgcolor="lightgreen"
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
