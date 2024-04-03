import Image from "next/image";
import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src={"/assets/images/footer/Logo.png"}
        alt="logo"
        width={400}
        height={100}
      />
    </div>
  );
};

export default Loader;
