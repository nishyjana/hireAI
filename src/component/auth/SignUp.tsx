import React from "react";
import { useHistory } from "react-router-dom";
import { SIGNIN } from "../../constants/PathConstants";
import InputField from "../../ui/InputField";

export default function SignUp() {
  const history = useHistory();
  return (
    <div className="flex p-40">
      <div className="w-1/2 border-2 border-b-4 border-gray-100 m-auto flex flex-col rounded-xl">
        <div className="m-auto text-lg">Logo</div>
        <div className="z-30 p-10 grid grid-rows-3 grid-flow-col gap-1">
          <InputField
            placeholder="First name"
            className="w-full bg-gray-200 my-3 py-3 px-5 rounded-3xl mr-10"
          />
          <InputField
            placeholder="Email"
            className="w-full bg-gray-200 my-3 py-3 px-5  rounded-3xl"
          />
          <InputField
            placeholder="University"
            className="w-full bg-gray-200 my-3 py-3 px-5 rounded-3xl mr-10"
          />
          <InputField
            placeholder="Last name"
            className="w-full bg-gray-200 my-3 py-3 px-5  rounded-3xl"
          />
          <InputField
            placeholder="Contact number"
            className="w-full bg-gray-200 my-3 py-3 px-5 rounded-3xl mr-10"
          />
          <InputField
            placeholder="Degree program"
            className="w-full bg-gray-200 my-3 py-3 px-5  rounded-3xl"
          />
        </div>
        <button className="mt-3 w-1/2 m-auto my-10 bg-hireAI text-white py-3 rounded-3xl">
          Sign up
        </button>
        <div className="mt-1 text-gray-500 flex mx-auto">
          <div className="mr-1">Already have an account?</div>
          <div
            className="mr-1 text-hireAI"
            onClick={() => history?.push(SIGNIN)}
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
}
