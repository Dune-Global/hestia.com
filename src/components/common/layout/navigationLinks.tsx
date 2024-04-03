import React from 'react'
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

type Props = {}

const NavigationLinks = (props: Props) => {
      const router = useRouter();
      const { data: session }: any = useSession();
  return (
    <div>
      {" "}
      {!session ? (
        <div>
          <button
            onClick={() => router.push("./sign-in")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            role="menuitem"
          >
            Sign in
          </button>
          <button
            onClick={() => router.push("./sign-up")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            role="menuitem"
          >
            Sign up
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => router.push("./settings")}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            role="menuitem"
          >
            Settings
          </button>
          <button
            onClick={() => signOut()}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
            role="menuitem"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default NavigationLinks