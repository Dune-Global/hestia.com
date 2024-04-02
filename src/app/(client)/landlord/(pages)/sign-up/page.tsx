import LandLordRegisterCard from "@/components/landLord/LandLordRegisterCard";
import Image from "next/image";

export default function Signup() {
  return (
    <div className="flex flex-col sm:flex-row gap-x-28 py-10 justify-between">
      <div className="">
        <div className="flex flex-col gap-4 mb-10 my-3">
          <p className="text-4xl font-bold">List your properties.</p>
          <p className="font-light text-sm">
            Reach hundreds of students by listing your properties on our
            platform
          </p>
        </div>
        <Image
          src={"/assets/images/signin_signup/image.png"}
          alt=""
          width={1000}
          height={70}
        />
      </div>
      <div className="w-full">
        <LandLordRegisterCard />
      </div>
    </div>
  );
}
