import Container from "@/components/common/Container";
import {
  Governing,
  Indemnification,
  Intellectual,
  Our_service,
  Payment,
  Property,
} from "./content";

export default function TermsCondition() {
  return (
    <Container>
      <div>
        <div className="text-3xl font-bold py-5">Terms and Conditions</div>
        <div className="flex flex-col gap-4 py-8">
          <h1 className="font-semibold  text-lg">Use of Our Services</h1>

          {Our_service}
          <h1 className="font-semibold  text-lg">
            Property Listings and Bookings
          </h1>
          {Property}
          <h1 className="font-semibold  text-lg"> Payment and Fees</h1>
          {Payment}
          <h1 className="font-semibold  text-lg">Intellectual Property</h1>
          {Intellectual}
          <h1 className="font-semibold  text-lg">Indemnification</h1>
          {Indemnification}
          <h1 className="font-semibold  text-lg">
            Governing Law and Dispute Resolution
          </h1>
          {Governing}
        </div>
      </div>
    </Container>
  );
}
