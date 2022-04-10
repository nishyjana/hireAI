import React from "react";
import { useHistory } from "react-router-dom";
import { ABOUT } from "../../constants/PathConstants";
import InputSearch from "../../ui/InputSearch";

export default function Welcome() {
  const history = useHistory()
  return (
    <div className="flex flex-col w-full items-center py-36 ">
      <h2 className=" font-semibold text-2xl font-sans flex mx-auto mb-14 mt-32">
        Hire AI
      </h2>
      <InputSearch onclick={() => history.push(ABOUT)} />
    </div>
  );
}
