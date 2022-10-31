import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MenuList from '@mui/material/MenuList';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";

import DehazeIcon from '@mui/icons-material/Dehaze';


//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";





export interface IHeaderMenuProps {
  // name: string;
  // clickFunction: () => void;
}

export default function HeaderMenu(props: IHeaderMenuProps) {


  //const [open, setState] = useState(false);

  const history = useNavigate();


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: () => void) => {
    

  };

  // const click =(event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const click =(event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    
   
  };

  const open = Boolean(anchorEl);
  
  const handleClose = () => {
    setAnchorEl(null);
};

const logOff = () => {
    localStorage.setItem('ht_mini_token', '');
    history('/login');
}

  

  return (
    <div>
     
    <IconButton size='large' onClick={click}>
          <DehazeIcon/>
        </IconButton>
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
    >
        <MenuItem onClick={() => history("/payment-configuration")}>Payment Configuration</MenuItem>
        <MenuItem onClick={() => history("/order-type-configuration")}>Order Type Configuration</MenuItem>
        <MenuItem onClick={() => history("/currency-configuration")}>Currency Configuration</MenuItem>

         <MenuItem onClick={() => logOff()}>Log off</MenuItem>
     <IconButtonDeneme width={500}>dfdf</IconButtonDeneme>

    </Menu>
   
</div>
  );
}
type InputProps = {
  width: number
}
const IconButtonDeneme = styled(Button)<InputProps>(({ width }) => ({
  width: width
}));
