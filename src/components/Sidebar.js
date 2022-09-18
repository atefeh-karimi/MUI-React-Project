import { Box } from "@mui/material";
import React from "react";

function Sidebar() {
  return (
    <Box
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      bgcolor="blue"
    >
      Sidebar
    </Box>
  );
}

export default Sidebar;
