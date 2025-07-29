import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useUIStore } from '../store/uiStore';

const drawerWidth = 240;

const Sidebar = () => {
  const { isDarkMode } = useUIStore();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
      PaperProps={{
        sx: {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: isDarkMode ? '#424242' : '#ADD8E6',
        },
      }}
    >
      <Toolbar />
      <List>
        <ListItem button component={NavLink} to="/">
          <ListItemIcon sx={{ color: 'white' }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: 'white' }} />
        </ListItem>
        <ListItem button component={NavLink} to="/settings">
          <ListItemIcon sx={{ color: 'white' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={{ color: 'white' }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
