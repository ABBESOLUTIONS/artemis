import React, { Fragment, useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserHeader from '../components/Header/UserHeader';
import MyDrawer from '../components/MyDrawer/MyDrawer';

function UserLayout() {
    const [openDrawer, setOpenDrawer] = useState(false) 

    // const [openDrawer, setOpenDrawer] = useState(false)

    const handleOPenDrawer= () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <Fragment>
            <UserHeader toogleOpen={handleOPenDrawer}/>
            <MyDrawer opening={openDrawer} closing={handleOPenDrawer}/>
            <Outlet/>
        </Fragment>
    );
}

export default UserLayout;