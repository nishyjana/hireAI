import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';

const ScreensWithNavAndSideBar = ({ children }) => (
    <>
        <div className="container w-screen h-screen">
            <div className="flex flex-row w-screen">
                <div className="container relative bg-hireAI w-1/3 lg:w-1/4 xl:w-1/6 h-full">
                    <div className="fixed w-1/3 lg:w-1/4 xl:w-1/6">
                        <Sidebar />
                    </div>
                    <div className="flex w-2/3 lg:w-3/4 xl:w-5/6">
                        <div className="pl-64  flex w-full">
                            <div className="pt-4 w-full">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

function AdminProtectedRoutesWithLayout({ component: Component, ...restOfProps }) {
    return (
        <Route
            {...restOfProps}
            render={(props) => (
                <ScreensWithNavAndSideBar>
                    <Component {...props} />
                </ScreensWithNavAndSideBar>
            )}
        />
    );
}

export default AdminProtectedRoutesWithLayout;
