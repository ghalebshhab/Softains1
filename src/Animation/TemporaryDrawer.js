import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import Header from "../Header";
import Home from "./Home";

export default function TemporaryDrawer({ open, setOpen }) {
  const location = useLocation();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Software Content", path: "/Software" },
    { text: "GPA App", path: "/Mobileapp" },
    { text: "About Us", path: "/About" },
    { text: "Our Road Maps", path: "/roadmaps" },
    { text: "Developed By", path: "/developer" },
  ];

  const DrawerList = (
    <>
      <Box
        sx={{
          width: 250,
          height: "100vh",
          bgcolor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        {/* Title / Logo */}
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              letterSpacing: 2,
              fontWeight: "bold",
            }}
          >
            Menu
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: "white", opacity: 0.2 }} />

        {/* Menu Links */}
        <List sx={{ flexGrow: 1 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  color: "white",
                  textAlign: "center",
                  letterSpacing: 1,
                  borderLeft:
                    location.pathname === item.path
                      ? "4px solid white"
                      : "4px solid transparent",
                  "&:hover": {
                    bgcolor: "#111",
                    borderLeft: "4px solid white",
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontSize: "0.95rem",
                    fontWeight:
                      location.pathname === item.path ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Footer */}
        <Box
          sx={{ p: 2, textAlign: "center", fontSize: "0.8rem", opacity: 0.7 }}
        >
          © 2025 Softians
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
