import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { ABOUT, HELP, WELCOME } from "../constants/PathConstants";
import { useState } from "react";
import ProfileModal from "./modals/ProfileModal";
import useOuterClick from "../util/ClickHandler";

export default function NavBar() {
  const location = useLocation();
  const history = useHistory();

  const [profileModalClicked, setProfileModalClicked] = useState(false);

  const onclickFunction = (props: any) => {
    return history.push(`${props}`);
  };

  const handleOuterClick = () => {
    setProfileModalClicked(false);
  };

  const innerRef = useOuterClick(handleOuterClick);

  return (
    <div className="flex w-full h-auto bg-hireAI justify-between px-2">
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
      <div
        className="flex my-auto text-white py-4 mr-5 w-full justify-end"
        ref={innerRef}
      >
        <BsIcons.BsPersonCircle
          className="h-7 w-7"
          role="button"
          tabIndex={0}
          onClick={() => setProfileModalClicked(!profileModalClicked)}
          onKeyDown={() => setProfileModalClicked(!profileModalClicked)}
        />
      </div>
      <ProfileModal open={profileModalClicked} />
    </div>
  );
}
