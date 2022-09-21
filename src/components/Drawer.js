import * as React from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Mylist from "./List";

function MyDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: { sm: "none" } }}>
      <Button onClick={() => setOpen(true)}>
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <Mylist />
      </Drawer>
    </Box>
  );
}

export default MyDrawer;
