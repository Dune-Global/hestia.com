"use client";
import { useEffect } from "react";
import LandLordRegisterCard from "@/components/landLord/LandLordRegisterCard";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Loader from "@/components/common/layout/loader";

export default function Signup() {
  const { data: session, status: sessionStatus }: any = useSession();

  useEffect(() => {
    if (
      sessionStatus === "authenticated" &&
      session?.user?.role === "landlord"
    ) {
      redirect("./");
    }
  }, [session, sessionStatus]);

  if (sessionStatus === "loading")
    return (
      <div>
        <Loader />
      </div>
    );

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
        <div className="hidden sm:block">
          <Image
            src={"/assets/images/signin_signup/landlord-image.png"}
            alt=""
            width={1000}
            height={70}
            className="hidden sm:block"
          />
        </div>
      </div>
      <div className="w-full">
        <LandLordRegisterCard />
      </div>
    </div>
  );
}
