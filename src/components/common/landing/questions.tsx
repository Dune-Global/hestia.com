import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function Questions() {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between py-12">
        <div className="flex font-extrabold text-4xl justify-center md:justify-start">
          Your questions,
          <br /> answered.
        </div>
        {/* Drop */}
        <div className="flex flex-col gap-4">
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Is my place right for Hestia?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Do I have to rent all the time?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  How much should I intereact with the guests?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  Any tips on being a great host?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">
                  What are Hestia’s fees?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 p-10 border rounded-lg md:p-20 md:justify-between bg-gray-50">
        <div className="flex flex-col gap-5">
          <div className="font-extrabold text-4xl flex justify-center text-center">
            Still have questions?
          </div>
          <div className="flex text-center">
            Get answers to all your questions from an experienced Superhost near
            you.
          </div>
        </div>

        <div className="flex">
          <Button className=" text-hgray-950 bg-hgray-0 border border-hgray-900">
            Connect with a Superhost
          </Button>
        </div>
      </div>
    </div>
  );
}
