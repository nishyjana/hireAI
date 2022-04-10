import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../ui/NavBar";

const ScreensWithNavAndSideBar = ({ children }: { children: any }) => (
  <>
    <div className="container w-screen h-screen">
      <div className="flex flex-row w-screen">
        <div className="w-full">
          <div className="fixed w-full z-50 bg-white">
            <NavBar />
          </div>

          <div className="pt-4- w-full">{children}</div>
        </div>
      </div>
    </div>
  </>
);

function ProtectedRoutesWithLayout({ component: Component, ...restOfProps }) {
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
