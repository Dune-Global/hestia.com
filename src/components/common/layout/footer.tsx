import React from "react";
import Image from "next/image";
import { Divide } from "lucide-react";
import { Year } from "@/helpers";
import Link from "next/link";
import Policieslinks from "@/data/footer/footerpolicislinks";
import footerlogos from "@/data/footer/footerlogos";
import Hostinglinks from "@/data/footer/footerhostinglinks";
import Container from "@/components/common/Container";
export default function Footer() {
  return (
    <div className="bg-[#262626]  h-auto ">
      <Container>
        <div className="gap-y-8 flex flex-col py-5">
          <div className="flex flex-col md:flex-row items-center gap-5 justify-between pt-8 lg:text-base   text-sm text-gray-200 ">
            <div className="flex flex-row lg:gap-40 sm:gap-20 gap-14">
              <div className=" flex flex-col items-start lg:gap-y-7 gap-4  ">
                <h1 className="font-bold text-lg  "> Hestia</h1>
                <button className="font-light sm:text-sm text-xs">
                  About us
                </button>
                <button className="font-light sm:text-sm text-xs">
                  How it works
                </button>
                <button className="font-light sm:text-sm text-xs">
                  Contact us
                </button>
              </div>
              <div className=" flex flex-col items-start lg:gap-y-7 gap-4  ">
                <h1 className="font-bold text-lg">Hosting</h1>
                {Hostinglinks.map((item) => (
                  <div key={item.id} className="sm:text-sm text-xs">
                    <Link className="hover:underline  " href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className=" flex flex-col items-start lg:gap-y-7 gap-4  ">
                <h1 className="font-bold text-lg"> Policies</h1>
                {Policieslinks.map((item) => (
                  <div key={item.id} className="sm:text-sm text-xs">
                    <Link className="hover:underline  " href={item.link}>
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-row h-48 md:h-auto justify-center ">
              <Image
                src={"/assets/images/footer/Logo.svg"}
                alt="logo"
                width={400}
                height={100}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="bg-gray-600 h-[0.1px] w-full flex "></div>
          <div className="flex sm:flex-row flex-col  justify-between items-center  gap-4 text-gray-400 ">
            <div>
              Copyright &copy;{Year} | {}{"Hestia "}
            </div>
            <div className="flex  gap-5">
              {footerlogos.map((item) => (
                <Link href={item.link} key={item.id}>
                  <button className=" ">
                    <item.icon strokeWidth={1} />
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
