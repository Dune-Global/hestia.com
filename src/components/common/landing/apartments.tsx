import Image from "next/image";
import { Apartment } from "./content";
import { Button } from "@/components/ui/button";

export default function Apartments() {
  return (
    <div className=" flex flex-col  items-center gap-16 ">
      <div className="font-extrabold text-4xl justify-center text-center">
        Introducing <span className="text-primary">high-quality</span>{" "}
        apartments
      </div>
      <div className="flex flex-col  gap-10">
        <div className="flex md:flex-row flex-col items-center gap-10 justify-center">
          <Image
            src={"/assets/images/landing/apartments/apartment1.png"}
            alt=""
            width={250}
            height={250}
            className=""
          ></Image>
          <Image
            src={"/assets/images/landing/apartments/apartment2.png"}
            alt=""
            width={250}
            height={250}
            className=""
          ></Image>
          <Image
            src={"/assets/images/landing/apartments/apartment3.png"}
            alt=""
            width={250}
            height={250}
            className=""
          ></Image>{" "}
        </div>
        <div className="flex flex-col gap-4 md:w-[800px] ">
          <div className="justify-center flex text-center">{Apartment}</div>
          <div className="flex justify-center">
            <Button variant={"outlineGray"} className="">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* 3 */}
    </div>
  );
}
