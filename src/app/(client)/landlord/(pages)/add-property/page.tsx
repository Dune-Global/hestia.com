"use client";

import FeatureCard from "@/components/common/cards/FeatureCard";
import React, { useState } from "react";
import LongCard from "@/components/common/cards/LongCard";
import accomodationTypeData from "@/data/landlord/shareType";
import buildingTypeData from "@/data/landlord/propertyType";
import TextInput from "@/components/common/inputs/TextInput";
import CounterInput from "@/components/common/inputs/CounterInput";
import basicsCounterData from "@/data/landlord/basics";
import { amenitiesData, safetyAmenitiesData } from "@/data/landlord/amenities";
import { Images } from "lucide-react";
import ImageUpload from "@/components/landLord/ImageUpload";
import Container from "@/components/common/Container";

const AddProperty = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImagesSelected = (images: File[]) => {
    setSelectedImages(images);
  };

  const questionStyles = "font-bold text-[24px] leading-[32px]";

  return (
    <Container>
      {/* Title */}
      <div className="mt-20 flex flex-col gap-3">
        <h1 className="font-bold text-[44px] leading-[52px]">
          Add new property
        </h1>
        <h2 className="text-[14px] leading-[20px]">
          Fill in the details below to add a new property listing
        </h2>
      </div>

      {/* Building Type */}
      <div className="mt-20 flex flex-col gap-10">
        <h3 className={`${questionStyles}`}>
          Which of these best describes your place?
        </h3>
        <div className="flex gap-5">
          {buildingTypeData.map((card) => (
            <FeatureCard
              key={card.id}
              variant="svg"
              bottomText={card.bottomText}
              svg={card.svg}
              clickable={card.clickable}
            />
          ))}
        </div>
      </div>

      {/* Accomodation method */}
      <div className="mt-16 flex flex-col gap-10">
        <h3 className={`${questionStyles}`}>
          What type of place will guests have?
        </h3>
        <div className="flex flex-col gap-6">
          {accomodationTypeData.map((card) => (
            <LongCard
              key={card.id}
              text={card.text}
              bottomText={card.bottomText}
              svg={card.svg}
            />
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 flex flex-col gap-10">
        <h3 className={`${questionStyles}`}>
          Where&apos;s your place located?
        </h3>
        <div className="flex gap-6 justify-between items-center">
          <div className="rounded-xl w-[50%] min-w-[50%] min-h-[700px] bg-hgray-400"></div>
          <div className="w-full flex flex-col gap-12">
            <TextInput placeholder="Address line 1" />
            <TextInput placeholder="Address line 2" />
            <TextInput placeholder="Address line 3" />
            <TextInput placeholder="Address line 4" />
            <TextInput placeholder="City" />
            <TextInput placeholder="Province" />
            <TextInput placeholder="Postal code" />
          </div>
        </div>
      </div>

      {/* Basics */}
      <div className="mt-16 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>
            Share some basics about your place
          </h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-hgray-500">
            You&apos;ll add more details later, like bed types
          </h4>
        </div>
        <div className="flex flex-col gap-8">
          {basicsCounterData.map((counter) => (
            <CounterInput key={counter.id} label={counter.label} />
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>
            Tell guests what your place has to offer
          </h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-hgray-500">
            You can add more details later
          </h4>
        </div>
        <div className="flex gap-5">
          {amenitiesData.map((card) => (
            <FeatureCard
              key={card.id}
              variant="svg"
              bottomText={card.bottomText}
              svg={card.svg}
              clickable={card.clickable}
            />
          ))}
        </div>

        {/* Safety amenities */}
        <div>
          <h4 className="mb-10 font-medium text-[16px] leading-[20px] text-hgray-500">
            Do you have any of these safety items?
          </h4>
          <div className="flex gap-5">
            {safetyAmenitiesData.map((card) => (
              <FeatureCard
                key={card.id}
                variant="svg"
                bottomText={card.bottomText}
                svg={card.svg}
                clickable={card.clickable}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      {/* <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>Add some photos of your house</h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-hgray-500">
            You'll need 5 to get started.
          </h4>
        </div>
        <div className="border border-hgray-400 h-[456px] max-h-[456px] rounded-xl flex flex-col justify-center items-center gap-16">
          <div className="flex flex-col items-center gap-8">
            <Images size={64} strokeWidth={1} color="gray" />
            <div className="flex flex-col items-center gap-3">
              <h3 className="font-bold text-[20px] leading-[28px]">
                Drag your photos here
              </h3>
              <h3 className="font-medium text-[16px] leading-[20px] text-hgray-400">
                Choose atleast 3 photos
              </h3>
            </div>
          </div>
          <h3 className="font-medium text-[16px] underline leading-[20px]">
            Upload from your device
          </h3>
        </div>
      </div> */}
      <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>Add some photos of your house</h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-hgray-500">
            You&apos;ll need 5 to get started.
          </h4>
        </div>
        <ImageUpload onImagesSelected={handleImagesSelected} />
      </div>
    </Container>
  );
};

export default AddProperty;
