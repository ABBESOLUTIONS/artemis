import { Button, Menu, MenuItem, SxProps, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { CLIENT_PAGES } from '../../routes/paths';

const SubMenuItem = styled(Link)(() => ({
    textDecoration:"none",
    color:"black"
}));

interface Props {
    title:string,
    sx?: SxProps
    
}

function DeclarationMenu({title, sx={}}: Props) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);



  };
    return (
        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{...sx}}
      >
        {title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <SubMenuItem to={CLIENT_PAGES.declarationSinistre}>Un Sinistre</SubMenuItem>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <SubMenuItem to={CLIENT_PAGES.reclamation}>Faire une réclamation</SubMenuItem>
        </MenuItem>
      </Menu>
    </div>
    );
}

export default DeclarationMenu;