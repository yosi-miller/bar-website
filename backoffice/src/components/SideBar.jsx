import React from 'react';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import InfoIcon from '@mui/icons-material/Info';
import SideBarButton from './SideBarButton';

const routerButtons = [
  { to: '/', text: 'בית', icon: <HomeIcon /> },
  { to: '/new-item/bars', text: 'ברים', icon: <MenuBookIcon /> },
  { to: '/new-item/tables', text: 'שולחנות', icon: <RestaurantIcon /> },
  { to: '/about', text: 'אודות', icon: <InfoIcon /> },
];

const Sidebar = () => {
  return (
    <Box sx={{ width: '15%', backgroundColor: '#f5f5f5' }}>
      {routerButtons.map((item) => (
        <SideBarButton key={item.to} item={item} />
      ))}
    </Box>
  );
};

export default Sidebar;