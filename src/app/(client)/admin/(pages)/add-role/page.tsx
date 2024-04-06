"use client";
import React, { useState } from "react";
import { Home, Building2, UserRound } from "lucide-react";
import {
  AdminRegisterForm,
  StudentRegisterForm,
  WardenRegisterForm,
} from "@/components/admin/add-role";

type Props = {};

function AddRole({}: Props) {
  const [selectedRole, setSelectedRole] = useState<string>("Warden");

  const roles = [
    { name: "Warden", icon: Home },
    { name: "Admin", icon: Building2 },
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
              <div
                key={name}
                onClick={() => setSelectedRole(name)}
                className={`border rounded-md px-9 py-5 cursor-pointer transition-colors duration-200 ${
                  selectedRole === name
                    ? "border-gray-600"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                <div className="flex justify-center">
                  <Icon />
                </div>
                <div>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="font-bold text-lg">Fill the details below.</p>
        <div className="w-full">
          {selectedRole === "Warden" && <WardenRegisterForm />}
          {selectedRole === "Admin" && <AdminRegisterForm />}
          {selectedRole === "Student" && <StudentRegisterForm />}
        </div>
      </div>
    </div>
  );
}

export default AddRole;
