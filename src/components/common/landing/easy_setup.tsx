import Image from "next/image";
import { Easysetup_para1, Easysetup_para2, Easysetup_para3 } from "./content";

const SectionStyle = {
  section: "flex flex-col gap-5 flex-1 p-5 border-2 rounded-md shadow-xl",
  font: "flex font-semibold  justify-center lg:justify-start text-lg ",
};
export default function Easysetup() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-5">
        <div className="font-extrabold text-4xl ">
          Easy <samp className="text-primary font-extrabold "> Setup</samp>
        </div>
        <div className="flex flex-col sm:flex-row flex-1 gap-10">
          <div className={`${SectionStyle.section}`}>
            <div className={`${SectionStyle.font}`}>One-to-one guidance</div>
            <div className="flex text-sm">{Easysetup_para1}</div>
          </div>
          <div className={`${SectionStyle.section}`}>
            <div className={`${SectionStyle.font}`}>
              Specialized support from Hestia
            </div>
            <div className="flex text-sm">{Easysetup_para2}</div>
          </div>
          <div className={`${SectionStyle.section}`}>
            <div className={`${SectionStyle.font}`}>One-to-one guidance</div>
            <div className="flex text-sm">{Easysetup_para3}</div>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="flex flex-1 gap-10 py-20 flex-col sm:flex-row">
        <div className={`${SectionStyle.section}flex flex-1 shadow-xl`}>
          <div className="flex justify-center">
            <Image
              src={"/assets/images/landing/Business-Deal-1.png"}
              alt=""
              width={180}
              height={180}
            ></Image>
          </div>
          <div className={`${SectionStyle.font}`}>One-to-one guidance</div>
          <div className="flex text-sm">{Easysetup_para1}</div>
        </div>

        <div className={`${SectionStyle.section}flex flex-1 shadow-xl`}>
          <div className="flex justify-center">
            <Image
              src={"/assets/images/landing/Business-Deal-2.png"}
              alt=""
              width={180}
              height={180}
            ></Image>
          </div>
          <div className={`${SectionStyle.font}`}>
            Specialized support from Hestia
          </div>
          <div className="flex text-sm">{Easysetup_para2}</div>
        </div>

        <div className={`${SectionStyle.section}flex flex-1 shadow-xl`}>
          <div className=" flex justify-center ">
            <Image
              src={"/assets/images/landing/Business-Deal-1.png"}
              alt=""
              width={180}
              height={180}
            ></Image>
          </div>
          <div className={`${SectionStyle.font}`}>one-to-one guidance</div>
          <div className="flex text-sm">{Easysetup_para3}</div>
        </div>
      </div>
    </div>
  );
}
