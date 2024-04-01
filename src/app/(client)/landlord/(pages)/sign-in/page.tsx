import Image from "next/image";
import SigninForm from "./form";
import Container from "@/components/common/Container";

export default function SignIn() {
  return (
    <Container>
      <div className="flex flex-col gap-2 py-4">
        <div className="flex flex-col gap-3">
          <div className="lg:text-5xl md:text-4xl text-2xl font-extrabold text-center lg:text-left">
            List your properties.
          </div>
          <div className="md:text-2xl text-xl text-center lg:text-left">
            Reach hundreds of students by listing your properties on our
            platform{" "}
          </div>
        </div>
        <div className="flex flex-col  lg:flex-row justify-between ">
          <div className="flex lg:h-[600px] justify-center  ">
            <Image
              src={"/assets/images/signin_signup/image.png"}
              alt=""
              width={500}
              height={50}
              className=""
            ></Image>{" "}
          </div>
          <div className="flex justify-center h-[600px]">
            <SigninForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
