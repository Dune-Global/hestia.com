'use client'
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserRoles } from "@/enum/UserRoles";

export default function Student() {
    const { data: session }: any = useSession();
    if (!session || session.user.role !== UserRoles.STUDENT) {
      redirect("student/sign-in");
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Student
    </main>
  );
}