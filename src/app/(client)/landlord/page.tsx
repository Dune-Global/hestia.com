"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Landlord() {
  const { data: session }: any = useSession(); // need await so function need to be async and server
  if (!session) {
    redirect("landlord/sign-in");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landlord
    </main>
  );
}
