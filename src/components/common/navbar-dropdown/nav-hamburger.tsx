"use client";
import { useState } from "react";

import {
  LandLordLinks,
  WardenLinks,
  AdminLinks,
  StudentLinks,
} from "@/data/pages";
import ClientOnly from "@/components/client-only";
import { UserRoles } from "@/enum/UserRoles";

interface NavigationMenuHamburgerProps {
  role?: UserRoles;
}

export default function NavigationMenuHamburger({
  role,
}: NavigationMenuHamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  let links:any;
  switch (role) {
    case UserRoles.LANDLORD:
      links = LandLordLinks;
      break;
    case UserRoles.WARDEN:
      links = WardenLinks;
      break;
    case UserRoles.ADMIN:
      links = AdminLinks;
      break;
    case UserRoles.STUDENT:
      links = StudentLinks;
      break;
    default:
      links = [];
  }

  return (
    <ClientOnly>
      <div className="flex flex-col justify-center z-50 ">
        <button onClick={handleClick}>
          {/* Hamburger icon */}
          <span
            className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-gray-900 block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        <div
          className={`absolute right-0 mt-64 w-48 rounded-md shadow-lg bg-gray-0 z-50 ring-1 ring-gray-200 bg-white transition-all duration-200 ease-in-out ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`py-1 transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-100 delay-100" : "opacity-0 delay-0"
            }`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {links.map((page:any, index:any) => (
              <a
                key={index}
                href={page.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {page.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}