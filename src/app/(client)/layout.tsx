import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import Footer from "@/components/common/layout/footer";
import { getServerSession } from "next-auth";
import SessionProvider from "@/app/(server)/config/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={cn("relative h-full antialiased", inter.className)}>
        <SessionProvider session={session}>
          <main className="z-20 relative min-h-screen bg-gray-0">
            <Toaster />
            <div>{children}</div>
            <Footer />
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
