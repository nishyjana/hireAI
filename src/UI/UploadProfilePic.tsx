/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import S3 from "react-aws-s3";
import { useDispatch, useSelector } from "react-redux";
import { s3Config } from "../constants/constant";
import ImageCropModal from "../util/ImageCropModal";
import NormalLoader from "./NormalLoader";

interface Props {
  isEdit: boolean;
  setImageFile?: (value: any) => void;
  imageFile?: any;
}

export default function UploadImage({
  isEdit,
  setImageFile,
  imageFile,
}: Props) {
  const [imageError, setImageError] = useState<string>("");
  const [cropModalVisible, setCropModalVisible] = useState(true);
  const [zoom, setZoom] = useState(1);
  const newFileName = Date.now().toString();

  const [profileImage, setProfileImage] = useState<File>(null);
  const [imageSrch, setImageSrc] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [imageLocation, setImageLocation] = useState("");
  // const dispatch = useDispatch();

  const profilePic =
    "";

  const currentUser = {
    profilePic:
      "https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg",
  };

  useEffect(() => {
    if (imageFile) {
      handleImage(imageFile);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageFile]);

  const handleImage = (e) => {
    const _URL = window.URL || window.webkitURL;
    let file, img;
    if ((file = e)) {
      img = new Image();
      img.onload = function () {
        const width = this.width;
        const height = this.height;
        if (width >= 360 && height >= 175) {
          setProfileImage(file);
          setCropModalVisible(true);
          setZoom(1);

          setImageError(null);
        } else {
          setImageError("Image resolution is too low");
        }
      };
      img.onerror = function () {
        setImageError("not a valid file: " + file.type);
      };
      img.src = _URL.createObjectURL(file);
    }
  };
  const uploadImageToS3 = async (resultedImage: any) => {
    setIsUploading(true);
    s3Config.dirName = `profile/${newFileName}`;
    const ReactS3Client = new S3(s3Config);
    if (resultedImage?.length) {
      ReactS3Client.uploadFile(resultedImage[0], newFileName)
        .then((data) => {
          setImageLocation(data?.location);
          setIsUploading(false);
          setImageFile(data?.location);
        })
        .catch((err) => {
          setIsUploading(false);
        });
    }
  };

  const handleProfilePic = () => {
    if (isEdit && profilePic) {
      return (
        <>
          <div className="w-44 h-44  rounded-full flex justify-center">
            <div className="text-center flex flex-col">
              <div className="m-auto">
                {isUploading ? (
                  <NormalLoader />
                ) : (
                  <>
                    <img
                      className=" object-contain rounded-full inset-0 bg-cover bg-center z-0"
                      src={profilePic}
                      alt={"profile pic"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else if (isEdit && !profilePic && currentUser?.profilePic) {
      return (
        <>
          <div className="w-44 h-44  flex justify-center">
            <div className="text-center flex flex-col">
              <div className="m-auto">
                {isUploading ? (
                  <NormalLoader />
                ) : (
                  <>
                    <img
                      className="object-contain   rounded-full inset-0 bg-cover bg-center z-0"
                      src={currentUser?.profilePic}
                      alt={"profile pic"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else if (!isEdit && currentUser?.profilePic) {
      return (
        <>
          <div className={`w-44 h-44  rounded-full flex justify-center`}>
            <div className="text-center flex flex-col">
              <div className="m-auto">
                {isUploading ? (
                  <NormalLoader />
                ) : (
                  <>
                    <img
                      className=" object-contain rounded-full inset-0 bg-cover bg-center z-0"
                      src={currentUser?.profilePic}
                      alt={"profile pic"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else if (!isEdit && profilePic) {
      return (
        <>
          <div className="w-44 h-44  rounded-full flex justify-center">
            <div className="text-center flex flex-col">
              <div className="m-auto">
                {isUploading ? (
                  <NormalLoader />
                ) : (
                  <>
                    <img
                      className=" object-contain rounded-full inset-0 bg-cover bg-center z-0"
                      src={profilePic}
                      alt={"profile pic"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else if (currentUser?.profilePic) {
      return (
        <>
          <div className="w-44 h-44  rounded-full flex justify-center">
            <div className="text-center flex flex-col">
              <div className="m-auto">
                {isUploading ? (
                  <NormalLoader />
                ) : (
                  <>
                    <img
                      className=" object-contain rounded-full inset-0 bg-cover bg-center z-0"
                      src={currentUser?.profilePic}
                      alt={"profile pic"}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="w-44 h-44  bg-purple-500 rounded-full flex justify-center">
            <div className="text-center flex flex-col">
              <div className="m-auto">
                {isUploading ? (
                  <NormalLoader />
                ) : (
                  <>
                    <div className="w-7 h-full text-white font-poppins text-4xl">
                      {"defaultProfilePicValue"}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="">
      {cropModalVisible && (
        <ImageCropModal
          modalVisible={cropModalVisible}
          setModalVisible={setCropModalVisible}
          uploadImageToS3={uploadImageToS3}
          setImageUrl={setImageSrc}
          uploadedImageUrl={profileImage && URL.createObjectURL(profileImage)}
          uploadedImage={profileImage}
          title="Crop image and upload"
          btnText="Update"
          zoom={zoom}
          setZoom={setZoom}
          aspectRatio={500 / 500}
        />
      )}

      <div className="flex flex-row">{handleProfilePic()}</div>
    </div>
  );
}
