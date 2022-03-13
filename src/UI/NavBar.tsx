import React from "react";

export default function NavBar() {
  return (
    <div className="flex w-full h-auto bg-black justify-between px-2">
      <div className="my-auto text-white py-4 w-full">
        LOGO
      </div>
      <div className="flex w-full justify-around">
        <div className="flex my-auto text-white py-4">WELCOME</div>

        <div className="flex my-auto text-white py-4">ABOUT</div>

        <div className="flex my-auto text-white py-4">HOW IT WORKS</div>
      </div>
      <div className="flex my-auto text-white py-4 mr-5 w-full justify-end">PROFILE</div>
    </div>
  );
}
