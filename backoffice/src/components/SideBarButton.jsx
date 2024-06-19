import React from "react";
import { ListItemButton, ListItemText, ListItemIcon, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function SideBarButton({ item }) {
  return (
    <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
      <ListItemButton component={Link} to={item.to} sx={{ flexShrink: 0 }}>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.text}
          sx={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        />
      </ListItemButton>
    </Box>
  );
}
