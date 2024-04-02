import Navbar from "@/components/common/layout/navbar";

import Container from "@/components/common/Container";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hestia Landlord",
  description: "Generated by create next app",
};

export default function LandLordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
