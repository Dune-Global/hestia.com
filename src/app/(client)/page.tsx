import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdPerson } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Button className="mx-4">default</Button>
      <Button variant="fillBlack" className="mx-4">fillBlack</Button>
      <Button variant="outline" className="mx-4">outline</Button>
    </div>
  );
}
