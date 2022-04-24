import React from "react";
import { useHistory } from "react-router-dom";
import { SIGNUP } from "../../constants/PathConstants";
import InputField from "../../ui/InputField";

export default function LogIn() {
  const history = useHistory();
  return (
    <div className="flex flex-col w-full h-full items-center pt-28 3xl:pt-36">
      <div className="w-1/3 h-1/2 border-b-8 flex flex-col rounded-3xl border-gray-100 border-2 pt-20 pb-2  px-16 3xl:pt-36">
        <div className="mx-auto text-2xl font-bold -mt-10">LOGO</div>
        <div className="z-50">
          <InputField
            placeholder="Username"
            className="w-full bg-gray-200 my-10 py-3 px-5 rounded-3xl"
          />
          <InputField
            placeholder="Password"
            className="w-full bg-gray-200 my-10 py-3 px-5  rounded-3xl"
          />
        </div>

        <button className="mt-10 w-full bg-hireAI text-white py-3 rounded-3xl">
          Sign in
        </button>

        <div className="mt-10 text-gray-500 flex mx-auto">
          <div className="mr-1">Don’t have an account?</div>
          <div
            className="mr-1 text-hireAI"
            onClick={() => history?.push(SIGNUP)}
          >
            Sign up |
          </div>
          <div className="mr-1 text-hireAI">Forgot password?</div>
        </div>
      </div>
      <img
        src="images/Device.svg"
        alt=""
        className="z-30 mt-24 pr-44 -ml-52 fixed flex 3xl:pt-28 3xl:-ml-72"
      />
    </div>
  );
}
