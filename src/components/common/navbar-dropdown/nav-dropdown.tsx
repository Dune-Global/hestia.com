import React from "react";

import Link from "next/link";
import { PageLinks } from "@/data/pages";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
export default function NavDropdown() {
  return (
    <div className="">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={PageLinks[0].path} legacyBehavior passHref className="hover:bg-red-500" >
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {PageLinks[0].title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={PageLinks[1].path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {PageLinks[1].title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={PageLinks[2].path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {PageLinks[2].title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={PageLinks[3].path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {PageLinks[3].title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
