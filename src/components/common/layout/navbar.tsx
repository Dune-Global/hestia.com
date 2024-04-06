"use client";

import Image from "next/image";
import NavDropdown from "../navbar-dropdown/nav-dropdown";
import NavigationMenuHamburger from "../navbar-dropdown/nav-hamburger";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import NavigationLinks from "./navigationLinks";
import { useSession } from "next-auth/react";
import { UserRoles } from "@/enum/UserRoles";

type NavbarProps = {
  roleType?: UserRoles;
};

const Navbar = ({ roleType }: NavbarProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const [isOpen, setIsOpen] = useState(false);
  const { data: session }: { data: any } = useSession();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col ">
      <div className=" ">
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
                  {!isMobile && session?.user.role === roleType && <NavDropdown role={roleType}/>}
                </div>

                <div className="flex items-center gap-2 ">
                  {session?.user.role === roleType && (session?.user.userName || session?.user.firstName)}
                  <div className="flex">
                    <button onClick={handleClick}>
                      <Avatar>
                        <AvatarFallback>
                          <RxAvatar size={30} />
                        </AvatarFallback>
                      </Avatar>
                    </button>

                    <div
                      className={`absolute right-0 p-3 mt-20 w-48 rounded-md shadow-lg bg-gray-0 z-50 ring-1 ring-gray-200 bg-white transition-all duration-200 ease-in-out ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                    >
                      <NavigationLinks role={roleType} />
                    </div>
                  </div>
                  <div className="flex">
                    {isMobile && session?.user.role === roleType && <NavigationMenuHamburger role={roleType}/>}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-400 h-[0.5px] flex"></div>
    </div>
  );
};

export default Navbar;