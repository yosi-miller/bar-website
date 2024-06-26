import { Box } from "@mui/material";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Box sx={{ display: "flex", height: '100vh' }}>
      <Sidebar />
      <Outlet />
    </Box>
  );
};

export default Root;
