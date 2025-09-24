import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";

const actions = [
  { name: "Home" },
  { name: "Gpa App" },
  { name: "Our Materials" },
  { name: "About US" },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ position: "relative" }}>
      <Backdrop open={open} style={{ zIndex: 1 }} />
      <SpeedDial
        ariaLabel="Header SpeedDial"
        sx={{ position: "absolute", top: 16, left: 16, zIndex: 2 }}
        icon={<HomeIcon style={{ fontSize: "32px", color: "white" }} />}
        direction="down" // 🔹 الخيارات تظهر للأسفل
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={null} // 🔹 بدون أيقونات
            tooltipTitle={action.name} // الاسم يظهر عند hover
            tooltipOpen={true} // tooltip مفتوح دائمًا
            onClick={handleClose}
            FabProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "white",
                textTransform: "none",
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
