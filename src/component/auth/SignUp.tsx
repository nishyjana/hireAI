import React, { useCallback, useState } from "react";
import UploadImage from "../../ui/UploadProfilePic";

export default function SignUp() {
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [userProfileImage, setUserProfileImage] = useState<File>(null);
  const [edit, setEdit] = useState(true);

  const handleImageInput = useCallback(
    (image: any) => {
      return (
        <>
          <label
            className="cursor-pointer underline whitespace-nowrap flex"
            htmlFor={edit ? "profileImage" : null}
          >
            <div className="font-light bg-slate-600 rounded-3xl p-4 text-hireAI text-sm flex ml-12 hover:block">
              Upload
            </div>
          </label>
          <input
            className={`invisible focus:outline-none w-full pb-3 border-b-2 pl-2 focus:border-blue-900`}
            id="profileImage"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setUserProfileImage(e.target.files[0]);
              e.target.value = null;
            }}
          />
        </>
      );
    },
    [edit]
  );

  return (
    <div className="flex flex-col w-full h-full items-center py-36  px-10">
      <div className="justify-end flex w-full px-10 py-1">
        <button className="mt-11 w-1/4 3xl:w-1/6 bg-hireAI text-white py-3 rounded-3xl mr-20 flex px-10">
          <div className="ml-1 m-auto"> TRACK PROGRESS</div>
          <img className="ml-1 -mt-1" alt="" src="images/Track.png" />
        </button>
        <button className="mt-10 w-1/4  3xl:w-1/6 bg-hireAI text-white py-3 rounded-3xl mr-20 flex px-10">
          <div className="ml-6 m-auto"> EDIT PROFILE</div>
          <img className="ml-1 mt-2" alt="" src="images/Edit.png" />
        </button>
      </div>
      <div className="w-2/3 h-2/3 border-2 border-b-8 border-gray-100 flex rounded-3xl my-32">
        <div className="w-1/3  flex">
          <div className="m-auto">
            <img
            className="w-44 h-44 object-cover rounded-full"
              alt=""
              src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            />
          </div>
        </div>

        <div className="w-2/3 flex justify-evenly py-10">
          <div className="flex flex-col 3xl:-ml-44">
            <div className="mb-3">
              <div className="mb-1">FIRST NAME</div>
              <div className="mb-3 font-medium">Lorem Ipsum</div>
            </div>

            <div className="mb-3">
              <div className="mb-1">EMAIL</div>
              <div className="mb-3 font-medium">example@example.com</div>
            </div>

            <div className="mb-3">
              <div className="mb-1">UNIVERSITY</div>
              <div className="mb-3 font-medium">
                Informatics Institute of Technology
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-3">
              <div className="mb-1">LAST NAME</div>
              <div className="mb-3 font-medium">Lorem Ipsum</div>
            </div>

            <div className="mb-3">
              <div className="mb-1">CONTACT</div>
              <div className="mb-3 font-medium">+9477090909</div>
            </div>

            <div className="mb-3">
              <div className="mb-1">DEGREE PROGRAM</div>
              <div className="mb-3 font-medium">Software Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
