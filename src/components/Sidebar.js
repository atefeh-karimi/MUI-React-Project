import { Box } from "@mui/system";
import React from "react";
import Mylist from "./List";

function Sidebar() {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Mylist />
      </Box>
    </Box>
  );
}

export default Sidebar;
