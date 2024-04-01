import { Check, X } from "lucide-react";
import {
  Comparison,
  ProtectionList1,
  ProtectionList2,
  ProtectionList3,
  ProtectionList4,
  ProtectionList5,
} from "../content";
import { Button } from "@/components/ui/button";

export default function ProtectList() {
  return (
    <div className=" flex flex-col gap-8 p-8 px-14">
      <div className="flex lg:gap-64 md:px-28 md:gap-44  justify-end  text-sm sm:gap-16 sm:px-6 gap-2 ">
        <div className="flex">Hestia</div>
        <div className="flex ">Competitors</div>
      </div>
      {/*  */}
      <div className="w-auto bg-hgray-300 h-0.5 "></div>

      <div className="flex font-bold text-lg ">Guest identity verification</div>
      <div className="flex items-center  ">
        <div className="sm:flex-1 flex text-base"> {ProtectionList1}</div>
        <div className="sm:flex-1 flex sm:gap-10 gap-5 justify-end">
          <div className="sm:flex-1 flex justify-evenly text-green-700   ">
            <Check strokeWidth={5} />
          </div>
          <div className="sm:flex-1 flex justify-evenly text-red-600  ">
            <X strokeWidth={5} />
          </div>
        </div>
      </div>

      <div className="w-auto bg-hgray-300 h-0.5 "></div>
      {/*  */}
      {/*  */}
      <div className="flex font-bold text-lg">Reservation screening</div>
      <div className="flex items-center  ">
        <div className="sm:flex-1 flex text-base"> {ProtectionList2}</div>

        <div className="sm:flex-1 flex sm:gap-10 gap-5 justify-end">
          <div className="sm:flex-1 flex justify-evenly text-green-700   ">
            <Check strokeWidth={5} />
          </div>
          <div className="sm:flex-1 flex justify-evenly text-red-600 ">
            <X strokeWidth={5} />
          </div>
        </div>
      </div>
      <div className="w-auto bg-hgray-300 h-0.5 "></div>
      {/*  */}
      {/*  */}
      <div className="flex font-bold text-lg ">Damage protection</div>
      <div className="flex items-center  ">
        <div className="sm:flex-1 flex text-base"> {ProtectionList3}</div>
        <div className="sm:flex-1 flex sm:gap-10 gap-5 justify-end">
          <div className="sm:flex-1 flex justify-evenly text-green-700   ">
            <Check strokeWidth={5} />
          </div>
          <div className="sm:flex-1 flex justify-evenly text-red-600 ">
            <X strokeWidth={5} />
          </div>
        </div>
      </div>
      <div className="w-auto bg-hgray-300 h-0.5 "></div>
      {/*  */}
      {/*  */}
      <div className="flex font-bold text-lg">Liability insurance</div>
      <div className="flex items-center  ">
        <div className="sm:flex-1 flex text-base"> {ProtectionList4}</div>
        <div className="sm:flex-1 flex sm:gap-10 gap-5 justify-end">
          <div className="sm:flex-1 flex justify-evenly text-green-700  ">
            <Check strokeWidth={5} />
          </div>
          <div className="sm:flex-1 flex justify-evenly text-red-600 ">
            <X strokeWidth={5} />
          </div>
        </div>
      </div>
      <div className="w-auto bg-hgray-300 h-0.5 "></div>
      {/*  */}
      {/*  */}
      <div className="flex font-bold text-lg">24-hour safety line</div>
      <div className="flex items-center  ">
        <div className="sm:flex-1 flex text-base"> {ProtectionList5}</div>
        <div className="sm:flex-1 flex sm:gap-10 gap-5 justify-end">
          <div className="sm:flex-1 flex justify-evenly text-green-700  ">
            <Check strokeWidth={5} />
          </div>
          <div className="sm:flex-1 flex justify-evenly text-red-600 ">
            <X strokeWidth={5} />
          </div>
        </div>
      </div>
      <div className="w-auto bg-hgray-300 h-0.5 "></div>
      {/*  */}
      <div className="flex flex-col gap-4">
        <div className="justify-center flex text-center text-base">
          {Comparison}
        </div>
        <div className="flex justify-center">
          <Button className="text-hgray-950 bg-hgray-0 border border-hgray-900">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
