"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Landlord() {
  const { data: session }: any = useSession(); // need await so function need to be async and server
  if (!session) {
    redirect("landlord/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landlord
      {!session ? (
        <div>
          <div>login</div>
          <div>register</div>
        </div>
      ) : (
        <div>
          <Button onClick={() => signOut()}>Logout</Button>
        </div>
      )}
    </main>
  );
}
