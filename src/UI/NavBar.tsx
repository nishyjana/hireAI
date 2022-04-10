import React from "react";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  return (
    <div className="flex w-full h-auto bg-black justify-between px-2">
      <div className="my-auto text-white py-5 w-full">LOGO</div>
      <div className="flex w-full justify-around">
        <div
          className={`flex my-auto text-white py-4 ${
            location?.pathname === "/" ? "border-b-2 border-white" : null
          }`}
        >
          WELCOME
        </div>

        <div className="flex my-auto text-white py-4">ABOUT</div>

        <div className="flex my-auto text-white py-4">HOW IT WORKS</div>
      </div>
      <div className="flex my-auto text-white py-4 mr-5 w-full justify-end">
        PROFILE
      </div>
    </div>
  );
}
