import ContentLayout from "./ui/content-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    id: "1",
    question: "How do I book pet care services at Pet Clique?",
    answer:
      "A: To book our services, simply visit our website and navigate to the 'Book Now' section. Choose the service you require, select the dates, and follow the easy steps to confirm your booking.process, which typically involves providing your personal information, contact details, and agreeing to our terms and conditions.",
  },
  {
    id: "2",
    question: "What measures do you take to ensure the safety of pets in your care?",
    answer:
      "A: We maintain strict safety protocols, including secure enclosures, regular health check-ups, and trained staff, to ensure the safety and well-being of all pets under our care.",
  },
  {
    id: "3",
    question: "What kind of pets do you cater to?",
    answer:
      "A; We cater to a wide range of pets, including dogs, cats, birds, and small mammals. Our goal is to provide exceptional care for various furry and feathered companions.",
  },
  {
    id: "4",
    question: "Are your services available 24/7?",
    answer:
      "A: To book our services, simply visit our website and navigate to the 'Book Now' section. Choose the service you require, select the dates, and follow the easy steps to confirm your booking.process, which typically involves providing your personal information, contact details, and agreeing to our terms and conditions.",
  },
  {
    id: "5",
    question: "What veterinary care do you provide?",
    answer:
      "A: To book our services, simply visit our website and navigate to the 'Book Now' section. Choose the service you require, select the dates, and follow the easy steps to confirm your booking.process, which typically involves providing your personal information, contact details, and agreeing to our terms and conditions.",
  },
];

export default function Faq() {
  return (
    <ContentLayout className="flex flex-col gap-20">
      <div className="flex flex-col gap-4 text-center mx-auto max-w-2xl">
        <h3 className="font-semibold text-4xl">Frequently Asked Questions</h3>
        <p className="text-lg">
          Got questions about our services or pet care in general? From booking processes to pet
          health, discover everything you need to know to ensure a seamless and worry-free
          experience for you and your beloved pet.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Accordion className="space-y-6" type="multiple">
          {accordionData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-2xl font-semibold">{item.question}</AccordionTrigger>
              <AccordionContent className="font-satoshi text-lg/7">
                <span>{item.answer}</span>
                <br />
                <span className="italic font-medium underline underline-offset-4">Learn More</span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ContentLayout>
  );
}
