import React from "react";
import NavBar from "../UI/NavBar";

export default function Welcome() {
  return (
    <div>
      <NavBar />
      <div className="mx-auto my-auto text-red-600">Welcome</div>
    </div>
  );
}
