import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import NavBar from "../UI/NavBar";

const ScreensWithNavAndSideBar = ({ children }:{children:any}) => (
  <>
    <div className="container w-screen h-screen">
      <div className="flex flex-row w-screen">
        <div className=" w-2/3 lg:w-3/4 xl:w-5/6">
          <div className="fixed w-2/3 lg:w-3/4 xl:w-5/6 z-50 bg-white">
            <NavBar />
          </div>

          <div className="pl-6 pt-32 w-full">{children}</div>
        </div>
      </div>
    </div>
  </>
);

function ProtectedRoutesWithLayout({ component, ...restOfProps }:{component:Component, restOfProps:any}) {
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

export default ProtectedRoutesWithLayout;
