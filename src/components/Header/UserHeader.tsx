import { MenuBook } from '@mui/icons-material';
import { AppBar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { HEADER } from '../../common/HeaderConfig';
import useResponsive from '../../hooks/useResponsive';
import Logo from '../Logo';

interface Props {
    toogleOpen: Function
}

function UserHeader({toogleOpen}: Props) {
    const isMobile = useResponsive("down", "lg")

    return (
        <AppBar position="fixed"  elevation={0} sx={{height: "80px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Logo sx={{marginLeft: "30px"}} logoImg="assets/images/logo.png"/>
            {isMobile && <IconButton onClick={() => toogleOpen()}><MenuBook/></IconButton>}
        </AppBar>
    );
}

export default UserHeader;