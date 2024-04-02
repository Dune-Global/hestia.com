"use client";

import Image from "next/image";
import NavDropdown from "../navbar-dropdown/nav-dropdown";
import NavigationMenuHamburger from "../navbar-dropdown/nav-hamburger";
import { CircleUser } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Container from "../Container";
const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

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

                  {isMobile && <NavigationMenuHamburger />}
                </div>
                {/* <div className="flex ">
                  
                </div> */}
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
