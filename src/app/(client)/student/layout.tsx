import Container from "@/components/common/Container";
import Navbar from "@/components/common/layout/navbar";
import { UserRoles } from "@/enum/UserRoles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hestia Student",
  description: "Generated by create next app",
};

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar roleType={UserRoles.STUDENT}/>
      <Container>{children}</Container>
    </div>
  );
}
