"use client";
import React from "react";
import Image from "next/image";
import {
  Streamline_heading,
  Streamline_list1,
  Streamline_list2,
  Streamline_list3,
  Streamline_list4,
  Streamline_list5,
} from "./content";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const liststyle = {
  style: "flex flex-row gap-5 font-semibold",
};

export default function Streamline() {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push("/landlord/sign-up");
  };
  const handleSignInClick = () => {
    router.push("/landlord/sign-in");
  };
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between gap-8 items-center">
      <div className="flex gap-2 flex-col justify-center md:px-36 ">
        <div className="flex justify-center ">
          <Image
            src={"/assets/images/footer/Logo.svg"}
            alt=""
            width={150}
            height={150}
          ></Image>{" "}
        </div>
        <div className="flex flex-col gap-10">
          <div className="font-bold flex-1  text-4xl flex text-center ">
            {Streamline_heading}
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className={`${liststyle.style}`}>
              <Check />
              {Streamline_list1}
            </div>
            <div className={`${liststyle.style}`}>
              <Check />
              {Streamline_list2}
            </div>
            <div className={`${liststyle.style}`}>
              <Check />
              {Streamline_list3}
            </div>
            <div className={`${liststyle.style}`}>
              <Check />
              {Streamline_list4}
            </div>
            <div className={`${liststyle.style}`}>
              <Check />
              {Streamline_list5}
            </div>
          </div>
          <div className="flex gap-6 justify-center">
            <div>
              <Button
                variant={"fillBlack"}
                className="bg-gray-900"
                onClick={handleSignUpClick}
              >
                Sign in as a Student 
              </Button>
            </div>
            <div>
              <Button
                variant={"outlineGray"}
                className=""
                onClick={handleSignInClick}
              >
                Sign in as a Landlord
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex">
        <Image
          src={"/assets/images/landing/image 26.png"}
          alt=""
          width={600}
          height={400}
        />
      </div>
    </div>
  );
}
