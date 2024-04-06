"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Loader from "@/components/common/layout/loader";
import WardenSignInCard from "@/components/warden/WardenSignInCard";
import { UserRoles } from "@/enum/UserRoles";

export default function SignIn() {
  const { data: session, status: sessionStatus }: any = useSession();

  useEffect(() => {
    if (
      sessionStatus === "authenticated" &&
      session?.user?.role === UserRoles.WARDEN
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
    <div className="flex flex-col justify-between py-10">
      <div className="flex flex-col gap-4 mb-10 my-3">
        <p className="text-4xl font-bold">Manage housing as warden.</p>
        <p className="font-light text-sm">
          Manage property access levels for students
        </p>
      </div>

      <div className="flex flex-row gap-x-28 items-center">
        <div className="hidden sm:block">
          <Image
            src={"/assets/images/signin_signup/wardon-image.png"}
            alt=""
            width={1000}
            height={70}
          />
        </div>
        <div className="w-full">
          <WardenSignInCard />
        </div>
      </div>
    </div>
  );
}
