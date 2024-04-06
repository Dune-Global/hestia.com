import React from "react";

import Link from "next/link";
import {
  LandLordLinks,
  AdminLinks,
  StudentLinks,
  WardenLinks,
} from "@/data/pages";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserRoles } from "@/enum/UserRoles";

interface NavDropdownProps {
  role?: UserRoles;
}

export default function NavDropdown({ role }: NavDropdownProps) {
  let links: any;
  switch (role) {
    case UserRoles.LANDLORD:
      links = LandLordLinks;
      break;
    case UserRoles.ADMIN:
      links = AdminLinks;
      break;
    case UserRoles.STUDENT:
      links = StudentLinks;
      break;
    case UserRoles.WARDEN:
      links = WardenLinks;
      break;
    default:
      links = [];
  }

  return (
    <div className="flex">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map((link: any, index: any) => (
            <NavigationMenuItem key={index}>
              <Link href={link.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
