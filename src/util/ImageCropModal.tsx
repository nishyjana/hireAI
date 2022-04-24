import React, { ReactElement, useCallback, useState } from "react";
import { Modal } from "react-responsive-modal";
import Cropper from "react-easy-crop";

interface Props {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setImageUrl: (value: string) => void;
  uploadedImageUrl: string;
  uploadedImage: File;
  title: string;
  btnText: string;
  zoom: number;
  setZoom: (value: number) => void;
  aspectRatio: number;
  uploadImageToS3: any;
  cropRect?: boolean;
}

export default function ImageCropModal({
  modalVisible,
  setModalVisible,
  setImageUrl,
  uploadedImageUrl,
  uploadedImage,
  title,
  btnText,
  zoom,
  setZoom,
  aspectRatio,
  uploadImageToS3,
  cropRect,
}: Props): ReactElement {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setZoom(scale);
  };

  const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180;
  };
  const resultedImage = [];
  const getCroppedImg = (imageSrc, pixelCrop, rotation = 0, selectedFile) => {
    setModalVisible(false);
    const image = new Image();
    image.src = imageSrc;
    image.setAttribute("crossOrigin", "");
    image.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxSize = Math.max(image.width, image.height);
      const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

      canvas.width = safeArea;
      canvas.height = safeArea;

      ctx.translate(safeArea / 2, safeArea / 2);
      ctx.rotate(getRadianAngle(rotation));
      ctx.translate(-safeArea / 2, -safeArea / 2);

      ctx.drawImage(
        image,
        safeArea / 2 - image.width * 0.5,
        safeArea / 2 - image.height * 0.5
      );
      const data = ctx.getImageData(0, 0, safeArea, safeArea);

      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;

      ctx.putImageData(
        data,
        Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
        Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y)
      );
      canvas.toBlob((blob) => {
        const img = [];
        img.push(blob);
        const file = new File([...img], selectedFile.name, {
          lastModified: selectedFile.lastModified,
          type: selectedFile.type,
        });

        resultedImage.push(file);
        setImageUrl(URL.createObjectURL(resultedImage[0]));
        setZoom(1);
        uploadImageToS3(resultedImage);
      }, "image/jpeg");
    };
  };
  const styles = {
    cropAreaStyle: {
      borderRadius: "4px",
    },
    containerStyle: {
      borderRadius: "4px",
    },
  };

  return (
    <Modal
      open={modalVisible}
      onClose={() => {
        setModalVisible(false);
      }}
      center
      styles={{ modal: { borderRadius: 8, maxWidth: "706px", width: "100%" } }}
      focusTrapped={false}
    >
      <div>
        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded">
          <h3 className="text-xl font-poppins  font-semibold flex justify-start">
            {title}
          </h3>
        </div>
        <div className="px-24">
          <div className="relative rounded" style={{ top: 30, bottom: 30 }}>
            {cropRect ? (
              <div style={{ width: 600, height: 300 }}>
                <Cropper
                  image={uploadedImageUrl}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  style={styles}
                  aspect={aspectRatio}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  showGrid={false}
                />
              </div>
            ) : (
              <div className="rounded" style={{ width: 400, height: 300 }}>
                <Cropper
                  image={uploadedImageUrl}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={aspectRatio}
                  cropShape="round"
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  showGrid={false}
                  style={{ containerStyle: { borderRadius: "4px" } }}
                />
              </div>
            )}
          </div>
          <div className="bg-white w-full mt-10 flex flex-col">
            <div>
              <input
                name="scale"
                type="range"
                onChange={(e) => handleScale(e)}
                min={"1"}
                max="3"
                step="0.01"
                defaultValue="1"
                className="w-full"
              />
            </div>
            <button
              onClick={() => {
                getCroppedImg(
                  uploadedImageUrl,
                  croppedAreaPixels,
                  rotation,
                  uploadedImage
                );
              }}
              className="p-2 w-full text-center text-white bg-hireAI  py-3 mt-4 rounded"
            >
              {btnText}
            </button>
            <button
              onClick={() => {
                setModalVisible(false);
              }}
              className="p-2 w-full text-center text-purple-500 border-2 py-3 bg-white my-4 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
