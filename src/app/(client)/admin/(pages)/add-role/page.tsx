"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Home, Building2, UserRound } from "lucide-react";
import {
  LandLordRegisterForm,
  StudentRegisterForm,
  WardenRegisterForm,
} from "@/components/admin/add-role";
import { useRouter } from "next/navigation";
import { UserRoles } from "@/enum/UserRoles";

type Props = {};

function AddRole(props: Props) {
  const [selectedRole, setSelectedRole] = useState<string>("Warden");
  const { data: session, status: sessionStatus }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (sessionStatus === "loading") {
      return;
    }

    if (!session) {
      router.push("/admin/sign-in");
    } else if (session?.user?.role !== UserRoles.ADMIN) {
      router.push("/admin/sign-in");
    }
  }, [session, sessionStatus, router]);

  const roles = [
    { name: "Warden", icon: Home },
    { name: "Landlord", icon: Building2 },
    { name: "Student", icon: UserRound },
  ];

  return (
    <div className="w-full flex flex-col gap-14 py-11">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-4xl">Add role.</p>
        <p className="font-light text-sm">
          Add a role and manage user access for Hestia
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="font-bold text-lg">Select a role for the user.</p>
          <div className="flex gap-6">
            {roles.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setSelectedRole(name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setSelectedRole(name);
                  }
                }}
                className={`flex flex-col gap-2 border rounded-md px-9 py-5 transition-colors duration-200 ${
                  selectedRole === name
                    ? "border-gray-600 cursor-default"
                    : "border-gray-300 hover:bg-gray-100 cursor-pointer"
                }`}
                tabIndex={0}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center">
                    <Icon />
                  </div>
                  <div>{name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="font-bold text-lg">Fill the details below.</p>
        <div className="w-full">
          {selectedRole === "Warden" && <WardenRegisterForm />}
          {selectedRole === "Landlord" && <LandLordRegisterForm />}
          {selectedRole === "Student" && <StudentRegisterForm />}
        </div>
      </div>
    </div>
  );
}

export default AddRole;
