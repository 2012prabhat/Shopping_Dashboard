import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from ".././images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import Searchbox from "./Searchbox";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import myImg from "../images/myImg.jpg";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
const Header = (props) => {
  const [sidebarDis,setSidebarDis] = props.state;

  const [myAccDrop, setMyAccDrop] = useState(null);
  const [notDrop,setNotDrop] = useState(null);
  const [cartDrop,setCartDrop] = useState(null);
  const openMyAcc = Boolean(myAccDrop);
  const openNotDrop = Boolean(notDrop);
  const openCartDrop = Boolean(cartDrop)

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 part1">
              <Link to="/" className="d-flex align-items-center logo">
                <img src={Logo} alt="" />
                <span className="ml-2">CartHub</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center pl-4 part2">
              <Button className="rounded-circle sideBarBtn" onClick={()=>setSidebarDis(!sidebarDis)}>
                {sidebarDis? <MdMenuOpen />: <MdOutlineMenu />}
               
               
              </Button>
              <Searchbox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              {/* <Button className="rounded-circle mr-3">
                <CiLight />
              </Button> */}

              {/* <Button className="rounded-circle mr-3">
           
            <MdDarkMode />
            </Button> */}

              {/* <Button className="rounded-circle mr-3" onClick={(e)=>setCartDrop(e.currentTarget)}>
                <FaCartArrowDown />
              </Button> */}
              {/* <Menu
                anchorEl={cartDrop}
                id="account-menu"
                open={openCartDrop}
                onClose={() => setCartDrop(null)}
                onClick={() => setCartDrop(null)}
                slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 15,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu> */}



              <Button className="rounded-circle mr-3" onClick={(e)=>setNotDrop(e.currentTarget)}>
                <FaBell />
              </Button>

              <Button className="rounded-circle mobSideBarBtn" onClick={()=>setSidebarDis(!sidebarDis)}>
                {sidebarDis? <MdMenuOpen />: <MdOutlineMenu />}
               
               
              </Button>
              <Menu
                anchorEl={notDrop}
                id="account-menu"
                open={openNotDrop}
                onClose={() => setNotDrop(null)}
                onClick={() => setNotDrop(null)}
                slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 15,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <h5 style={{padding:'4%'}}>Orders (12)</h5>
                <Divider />
                <div className="notList">

                <MenuItem>
                <div className="imageWrapper">
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2 notText"><b>Raj Kumar</b> added <b>Casio Watch</b> to his favourites.
                <br />
                <span className="time">few seconds ago</span>
                </div>
                </MenuItem>
                <MenuItem>
                <div className="imageWrapper">
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2 notText"><b>Raj Kumar</b> added <b>Casio Watch</b> to his favourites.
                <br />
                <span className="time">few seconds ago</span>
                </div>
                </MenuItem>
                <MenuItem>
                <div className="imageWrapper">
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2 notText"><b>Raj Kumar</b> added <b>Casio Watch</b> to his favourites.
                <br />
                <span className="time">few seconds ago</span>
                </div>
                </MenuItem>
                <MenuItem>
                <div className="imageWrapper">
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2 notText"><b>Raj Kumar</b> added <b>Casio Watch</b> to his favourites.
                <br />
                <span className="time">few seconds ago</span>
                </div>
                </MenuItem>
                <MenuItem>
                <div className="imageWrapper">
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2 notText"><b>Raj Kumar</b> added <b>Casio Watch</b> to his favourites.
                <br />
                <span className="time">few seconds ago</span>
                </div>
                </MenuItem>
                </div>
                <Divider />
                <MenuItem>
               
                <Button variant="contained">View all notifications</Button>
                </MenuItem>
                
              </Menu>

              <div
                className="userCont d-flex align-items-center"
                onClick={(e) => setMyAccDrop(e.currentTarget)}
              >
                <div className="imageWrapper">
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2">
                  <div className="userName">Prabhat Kumar</div>
                  <div className="email">2012prabhat@gmail.com {}</div>
                </div>
              </div>

              <Menu
                anchorEl={myAccDrop}
                id="account-menu"
                open={openMyAcc}
                onClose={() => setMyAccDrop(null)}
                onClick={() => setMyAccDrop(null)}
                slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 20,
                          height: 20,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 130,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
               <MenuItem>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  My account
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
