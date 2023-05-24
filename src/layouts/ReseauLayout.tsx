import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

function ReseauLayout() {
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    );
}

export default ReseauLayout;