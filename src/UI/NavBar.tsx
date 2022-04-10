import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { ABOUT, HELP, WELCOME } from "../constants/PathConstants";

export default function NavBar() {
  const location = useLocation();
  const history = useHistory();
  const onclickFunction = (props: any) => {
    return history.push(`${props}`);
  };

  return (
    <div className="flex w-full h-auto bg-black justify-between px-2">
      <div className="my-auto text-white py-5 w-full">LOGO</div>
      <div className="flex w-full justify-around">
        <div
          className={`flex flex-col my-auto text-white py-4`}
          role="button"
          tabIndex={0}
          onClick={() => onclickFunction(WELCOME)}
          onKeyDown={() => onclickFunction(WELCOME)}
        >
          WELCOME
          <div
            className={`${
              location?.pathname === WELCOME ? "block" : "hidden"
            } w-full mt-2 rounded-3xl h-1 bg-white`}
          ></div>
        </div>

        <div
          className="flex flex-col my-auto text-white py-4"
          role="button"
          tabIndex={0}
          onClick={() => onclickFunction(ABOUT)}
          onKeyDown={() => onclickFunction(ABOUT)}
        >
          ABOUT
          <div
            className={`${
              location?.pathname === ABOUT ? "block" : "hidden"
            } w-full mt-2 rounded-3xl h-1 bg-white`}
          ></div>
        </div>

        <div
          className="flex flex-col my-auto text-white py-4"
          role="button"
          tabIndex={0}
          onClick={() => onclickFunction(HELP)}
          onKeyDown={() => onclickFunction(HELP)}
        >
          HOW IT WORKS
          <div
            className={`${
              location?.pathname === HELP ? "block" : "hidden"
            } w-full mt-2 rounded-3xl h-1 bg-white`}
          ></div>
        </div>
      </div>
      <div className="flex my-auto text-white py-4 mr-5 w-full justify-end">
        <BsIcons.BsPersonCircle className="h-7 w-7" />
      </div>
    </div>
  );
}
