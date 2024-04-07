import Container from "@/components/common/Container";
import Apartments from "@/components/common/landing/apartments";
import Easysetup from "@/components/common/landing/easy_setup";
import ToptoBottom from "@/components/common/landing/protection/protect";
import Questions from "@/components/common/landing/questions";
import Streamline from "@/components/common/landing/streamline";
import Image from "next/image";
import SettingsPage from "../settings/page";
import Settingspage from "../settings/page";

export default function Landing() {
  return (
    <div>
      <Container>
        <div>
          <div>
            <div className="pt-16">
              <Streamline />
            </div>
            <div className="pt-16">
              <Easysetup />
            </div>
            {/*  */}
            <div className="py-16">
              <ToptoBottom />
            </div>
            {/*  */}
            <div className="py-16">
              <Apartments />
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-gray-100">
        <Container>
          <div className="py-16">
            <Questions />
          </div>
        </Container>
      </div>
    </div>
  );
}
