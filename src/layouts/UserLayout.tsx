import React, { Fragment, useState } from 'react';
import UserHeader from '../components/Header/UserHeader';
import MyDrawer from '../components/MyDrawer/MyDrawer';
import { Outlet } from 'react-router-dom';

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