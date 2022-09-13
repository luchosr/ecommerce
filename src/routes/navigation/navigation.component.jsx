import React from 'react';
import  {Outlet} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <div className="">
                <h1> Iam the navigation bar</h1>
            </div>
            <Outlet/>
        </div>
    );
};

export default Navigation;