import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './account-dropdown.styles.css'
import { useHistory } from "react-router-dom";

export default function AccountDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();
  function redirectToProfile(){
      history.push('/profile');
  }
  return (
    <div>
      <Button className='dropButton' aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
       Account
      <ArrowDropDownIcon />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose,redirectToProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Update Password</MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </div>
  );
}