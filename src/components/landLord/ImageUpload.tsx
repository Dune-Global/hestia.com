"use client";

import { Images } from "lucide-react";
import React, { useState } from "react";

interface ImageUploadProps {
  onImagesSelected: (images: File[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagesSelected }) => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    processImages(files);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    processImages(files);
  };

  const processImages = (files: FileList | null) => {
    if (files) {
      const imagesArray = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );
      if (imagesArray.length > 5) {
        alert("You can only upload up to 5 images.");
        return;
      }
      setUploadedImages(imagesArray);
      onImagesSelected(imagesArray);
    }
  };

  const preventDefaultBehavior = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <label
      className="border border-hgray-400 h-[456px] max-h-[456px] rounded-xl flex flex-col justify-center items-center gap-16"
      onDrop={handleDrop}
      onDragOver={preventDefaultBehavior}
      htmlFor="imageUpload"
    >
      <div className="flex flex-col items-center gap-8">
        <Images size={64} strokeWidth={1} color="gray" />
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-bold text-[20px] leading-[28px]">
            Drag your photos here
          </h3>
          <h3 className="font-medium text-[16px] leading-[20px] text-hgray-400">
            Choose at least 3 photos
          </h3>
        </div>
      </div>
      <h3 className="font-medium text-[16px] underline leading-[20px]">
        Upload from your device
      </h3>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <div>
        {/* Display uploaded images */}
        {uploadedImages.map((image) => (
          <img
            key={`${image.name}-${image.lastModified}`}
            src={URL.createObjectURL(image)}
            alt={`Uploaded ${image.name}`}
            style={{ maxWidth: "100%", maxHeight: "200px", marginTop: "10px" }}
          />
        ))}
      </div>
    </label>
  );
};

export default ImageUpload;

