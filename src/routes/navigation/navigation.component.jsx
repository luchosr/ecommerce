import {Fragment} from 'react';
import  {Outlet} from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <h1> Iam the navigation bar</h1>
            </div>
            <Outlet/>
        </>
    );
};

export default Navigation;