"use client";

import Image from "next/image";
import NavDropdown from "../navbar-dropdown/nav-dropdown";
import NavigationMenuHamburger from "../navbar-dropdown/nav-hamburger";
import { CircleUser } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { PageLinks, PageLinks2 } from "@/data/pages";
import pages from "@/data/pages/pages2";
const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-">
      <div>
        <Container>
          <div className=" ">
            <div className=" pt-">
              <div className="flex flex-row justify-between ">
                <div className="flex h- py-3 ">
                  <Image
                    src="/assets/images/footer/Logo.png"
                    alt="logo"
                    width={120}
                    height={120}
                  />
                </div>
                <div className=" flex flex-row items-center ">
                  {!isMobile && <NavDropdown />}
                </div>

                <div className="flex items-center gap-2 ">
                  <div className="flex">
                    <button onClick={handleClick}>
                      <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </button>

                    <div
                      className={`absolute right-0 p-3 mt-20 w-48 rounded-md shadow-lg bg-gray-0 z-50 ring-1 ring-gray-200 bg-white transition-all duration-200 ease-in-out ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      {PageLinks2.map((pages2, index) => (
                        <a
                          key={index}
                          href={pages2.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          {pages2.title}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="flex">
                    {isMobile && <NavigationMenuHamburger />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-400 h-[0.5px]"></div>
    </div>
  );
};
export default Navbar;
