"use client";

import FeatureCard from "@/components/common/cards/FeatureCard";
import React, { useState } from "react";
import LongCard from "@/components/common/cards/LongCard";
import accomodationTypeData from "@/data/landlord/shareType";
import buildingTypeData from "@/data/landlord/propertyType";
import TextInput from "@/components/common/inputs/TextInput";
import CounterInput from "@/components/common/inputs/CounterInput";
import basicsCounterData from "@/data/landlord/basics";
import genderTypeData from "@/data/landlord/genderType";
import { amenitiesData, safetyAmenitiesData } from "@/data/landlord/amenities";
import ImageUpload from "@/components/landLord/ImageUpload";
import Container from "@/components/common/Container";
import PriceInput from "@/components/landLord/PriceInput";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/layout/loader";
import AddLocationGoogleMap from "@/components/common/maps/AddLocationGoogleMap";

const AddProperty = () => {
  const router = useRouter();

  const { data: session, status: sessionStatus }: any = useSession();

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selectedShareType, setSelectedShareType] = useState<string | null>(
    null
  );
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    string | null
  >(null);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedAmenities, setSelectedAmenities] = useState<string | null>(
    null
  );
  const [selectedSafetyAmenities, setSelectedSafetyAmenities] = useState<
    string | null
  >(null);
  const [propertyPrice, setPropertyPrice] = useState<number>(0);

  const handleImagesSelected = (images: File[]) => {
    setSelectedImages(images);
  };

  const handleSelectShareType = (id: string) => {
    setSelectedShareType(id === selectedShareType ? null : id);
  };

  const handlePropertyTypeSelect = (id: string) => {
    setSelectedPropertyType(selectedPropertyType === id ? null : id);
  };

  const handleGenderSelect = (id: string) => {
    setSelectedGender(selectedGender === id ? null : id);
    console.log("Gender selected:", id);
    // You can add your logic here to handle gender selection
  };

  const handleAmenitiesSelect = (id: string) => {
    setSelectedAmenities(selectedAmenities === id ? null : id);
    console.log("Amenities selected:", id);
    // You can add your logic here to handle gender selection
  };

  const handleSafetyAmenitiesSelect = (id: string) => {
    setSelectedSafetyAmenities(id === selectedSafetyAmenities ? null : id);
  };

  const handlePriceChange = (price: number) => {
    setPropertyPrice(price);
  };

  const questionStyles = "font-bold text-[24px] leading-[32px]";

  return (
    <Container>
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
        <h3 className="font-bold text-[24px] leading-[32px]">
          Which of these best describes your place?
        </h3>
        <div className="flex gap-5">
          {buildingTypeData.map((card) => (
            <FeatureCard
              key={card.id}
              variant="svg"
              bottomText={card.bottomText}
              svg={card.svg}
              onSelect={() => handlePropertyTypeSelect(card.id)}
              selected={selectedPropertyType === card.id}
            />
          ))}
        </div>
      </div>

      {/* Gender */}
      <div className="mt-20 flex flex-col gap-10">
        <h3 className="font-bold text-[24px] leading-[32px]">
          Who can rent your place?
        </h3>
        <div className="flex gap-5">
          {genderTypeData.map((card) => (
            <FeatureCard
              key={card.id}
              variant="svg"
              bottomText={card.bottomText}
              svg={card.svg}
              onSelect={() => handleGenderSelect(card.id)}
              selected={selectedGender === card.id}
            />
          ))}
        </div>
      </div>

      {/* Accomodation method */}
      <div className="mt-16 flex flex-col gap-10">
        <h3 className="font-bold text-[24px] leading-[32px]">
          What type of place will guests have?
        </h3>
        <div className="flex flex-col gap-6">
          {accomodationTypeData.map((card) => (
            <LongCard
              key={card.id}
              text={card.text}
              bottomText={card.bottomText}
              svg={card.svg}
              selected={selectedShareType === card.id}
              onClick={() => handleSelectShareType(card.id)}
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
          <div className='min-w-[50%]'>
            <AddLocationGoogleMap />
          </div>
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
          <h4 className="font-medium text-[16px] leading-[20px] text-gray-500">
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
              onSelect={() => handleAmenitiesSelect(card.id)}
              selected={selectedAmenities === card.id}
            // clickable={card.clickable}
            />
          ))}
        </div>

        {/* Safety amenities */}
        <div>
          <h4 className="mb-10 font-medium text-[16px] leading-[20px] text-gray-500">
            Do you have any of these safety items?
          </h4>
          <div className="flex gap-5">
            {safetyAmenitiesData.map((card) => (
              <FeatureCard
                key={card.id}
                variant="svg"
                bottomText={card.bottomText}
                svg={card.svg}
                onSelect={() => handleSafetyAmenitiesSelect(card.id)}
                selected={selectedSafetyAmenities === card.id}
              // clickable={card.clickable}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>Add some photos of your house</h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-gray-500">
            You'll need 5 to get started.
          </h4>
        </div>
        <ImageUpload onImagesSelected={handleImagesSelected} />
      </div>

      {/* Title */}
      <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>Give your house a title</h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-gray-500">
            Short titles work best
          </h4>
        </div>
        <TextInput placeholder="Title" />
      </div>

      {/* Description */}
      <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>Create your description</h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-gray-500">
            Share what makes your place special
          </h4>
        </div>
        <TextInput placeholder="Description" />
      </div>

      {/* Price */}
      <div className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h3 className={`${questionStyles}`}>Add some photos of your house</h3>
          <h4 className="font-medium text-[16px] leading-[20px] text-hgray-500">
            You&apos;ll need 5 to get started.
          </h4>
        </div>
        <PriceInput onPriceChange={handlePriceChange} />
      </div>

      {/* Submit */}
      <div className="mt-16 gap-6 flex mb-20 items-center justify-center">
        <button className=" text-gray-900 py-4 px-8 rounded-lg border border-gray-900">
          Clear All
        </button>
        <button className="bg-[#262626] text-white py-4 px-8 rounded-lg">
          Publish
        </button>
      </div>
    </Container>
  );
};

export default AddProperty;
