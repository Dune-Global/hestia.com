import Container from "@/components/common/Container";
import {
  Date,
  How_Use,
  Information,
  Information_Sharing,
  children_policy,
  data,
} from "./content";

export default function PrivacyPolicy() {
  return (
    <Container>
      <div>
        <div className="text-3xl font-bold py-5">Privacy Policy</div>
        <div className="flex flex-col gap-4 py-8">
          <h1 className="font-semibold  text-lg">Effective Date</h1>
          {Date}
          <h1 className="font-semibold  text-lg">Information We Collect</h1>
          {Information}
          <h1 className="font-semibold  text-lg">How We Use Your Information</h1>
          {How_Use}
          <h1 className="font-semibold  text-lg">Information Sharing</h1>
          {Information_Sharing}
          <h1 className="font-semibold  text-lg">Data Security</h1>
          {data}
          <h1 className="font-semibold  text-lg">Children's Policy </h1>
          {children_policy}
        </div>
      </div>
    </Container>
  );
}
