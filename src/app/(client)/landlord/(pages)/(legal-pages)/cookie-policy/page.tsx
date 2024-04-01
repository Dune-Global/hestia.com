import Container from "@/components/common/Container";
import { Date } from "../privacy-policy/content";
import { Effective_Date, Updates_Policy, We_Use, Your_Cookie } from "./content";

export default function CookiePolicy() {
  return (
    <Container>
      <div>
        <div className="text-3xl font-bold py-5">Cookie Policy</div>
        <div className="flex flex-col gap-4 py-8">
          <h1 className="font-semibold  text-lg">Effective Date</h1>
          {Effective_Date}
          <h1 className="font-semibold  text-lg">How We Use Cookies</h1>
          {We_Use}
          <h1 className="font-semibold  text-lg">Your Cookie Choices</h1>
          {Your_Cookie}
          <h1 className="font-semibold  text-lg">Updates to this Policy</h1>
          {Updates_Policy}
        </div>
      </div>
    </Container>
  );
}
