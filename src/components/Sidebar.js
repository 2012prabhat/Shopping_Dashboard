import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageIcon from "@mui/icons-material/Message";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [sidebarDis] = props.state;

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar" style={sidebarDis?{width:'20%'}:{width:'0%'}}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",paddingBottom:"80px" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //   <ListSubheader component="div" id="nested-list-subheader">
        //     Nested List Items
        //   </ListSubheader>
        // }
      >
        <ListItemButton onClick={()=>navigate('/')}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InventoryRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
          <ExpandLess
            style={
              open
                ? { transform: "rotate(180deg)", transition: "all 0.5s" }
                : { transform: "rotate(90deg)", transition: "all 0.5s" }
            }
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Box sx={{ ml: 3, borderLeft: "1px solid #e0e0e0", pl: 4 }}>
              <ListItemButton onClick={()=>navigate('/productlist')}>
                <ListItemText primary="Product List" />
              </ListItemButton>

              <ListItemButton onClick={()=>navigate('/productview')}>
                <ListItemText primary="Product View" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText onClick={()=>navigate('/upload')} primary="Product Upload" />
              </ListItemButton>
            </Box>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Sign up" />
        </ListItemButton>
        
        <div className="logoutWrapper">
        <Button variant="contained" startIcon={<LogoutIcon />}>
      Log Out
      </Button>
        </div>
        

        
        
      </List>
    </div>
  );
};

export default Sidebar;
