'use client'
import { useEffect } from "react";
import Image from "next/image";
import LandLordSignInCard from "@/components/landLord/LandLordSignInCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function SignIn() {
  const { data: session, status: sessionStatus }: any = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated" && session?.user?.role === "landlord") {
      redirect("./");
    }
  }, [session, sessionStatus]);
  
  return (
    <div className="flex flex-col justify-between py-10">
      <div className="flex flex-col gap-4 mb-10 my-3">
        <p className="text-4xl font-bold">List your properties.</p>
        <p className="font-light text-sm">
          Reach hundreds of students by listing your properties on our platform
        </p>
      </div>

      <div className="flex flex-row gap-x-28 items-center">
        <div className="hidden sm:block">
          <Image
            src={"/assets/images/signin_signup/image.png"}
            alt=""
            width={1000}
            height={70}
          />
        </div>
        <div className="w-full">
          <LandLordSignInCard />
        </div>
      </div>
    </div>
  );
}
