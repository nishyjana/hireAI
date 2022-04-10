import React from "react";

export default function Help() {
  return (
    <div className="flex flex-col w-full items-center py-36 ">
      <h2 className=" font-semibold text-2xl font-sans flex mx-auto mb-14  mt-32">
        HOW IT WORKS
      </h2>
      <div className="w-full flex h-auto py-2 justify-evenly ml-10">
        <div className="flex flex-col">
          <img src="images\Details.svg" className="w-full h-full" alt="" />
          <div className="mt-3 p-1 w-56 flex mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est
            mi, molestie et tellus sit amet, rutrum mollis felis.
          </div>
        </div>
        <div className="flex flex-col">
          <img src="images\UploadCSV.svg" className="w-full h-full" alt="" />
          <div className="mt-3 p-1 w-56 flex mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est
            mi, molestie et tellus sit amet, rutrum mollis felis.
          </div>
        </div>
        <div className="flex flex-col">
          <img
            src="images\RecordInterview.svg"
            className="w-full h-full"
            alt=""
          />
           <div className="mt-3 p-1 w-56 flex mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est
            mi, molestie et tellus sit amet, rutrum mollis felis.
          </div>
        </div>
      </div>
    </div>
  );
}
