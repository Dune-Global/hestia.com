import Image from "next/image";
import { TopToBottom_para1 } from "../content";
import ProtectList from "./protectlist";

export default function ToptoBottom() {
  return (
    <div className="flex gap-10 flex-col">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row text-4xl font-extrabold items-center justify-center gap-2">
          Top-to-bottom <span className="text-primary"> Protection</span>
        </div>
      </div>
      {/* 2nd part */}
      <div className="flex flex-col border shadow-xl justify-center lg:p-4 lg:py-9 gap-4 ">
        <ProtectList />
      </div>
    </div>
  );
}
