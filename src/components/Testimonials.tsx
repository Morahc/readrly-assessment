import ContentLayout from "./ui/content-layout";
import Testimonial from "./ui/testimonial";

const data = [
  {
    author: "Sarah Tilly.",
    authorTitle: "Pet Owner",
    authorImg: "/images/sarah.png",
    text: "“Leaving my pet in the care of Pet Clique was the best decision I made. Their team's dedication and love for animals are unparalleled. My furry friend returned home happy and well-cared for, and I had peace of mind throughout my trip. Thank you, Pet Clique, for your exceptional service!”",
  },
  {
    author: "Mark Thomas",
    authorTitle: "Pet Owner",
    authorImg: "/images/mark.png",
    text: "“Pet Clique has truly set the bar high for pet care. Their attention to detail, from veterinary services to the nurturing environment, was outstanding. My pet felt at home, and I felt at ease knowing they were in such capable hands. I highly recommend Pet Clique to every pet owner looking for top-notch care.”",
  },
  {
    author: "Emily Rachael",
    authorTitle: "Pet Owner",
    authorImg: "/images/emily.png",
    text: "“Pet Clique is a game-changer! Their pet nannies are angels in disguise, providing love and care as if my pet were their own. The facility is impeccable, and the level of personalization in their services is unmatched. I won't trust anyone else with my pet after experiencing the exceptional care at Pet Clique.”",
  },
];

export default function Testimonials() {
  return (
    <ContentLayout className="bg-primary text-white space-y-12">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="font-semibold text-4xl">What our clients says</h3>
          <p>
            Discover the heartwarming tales of pet owners who entrusted their beloved companions to
            Pet Clique. Read their stories and experiences, and find out why they trust us to
            provide exceptional care for their furry friends.
          </p>
        </div>
      </div>
      <div className="space-y-12">
        {data.map((item) => (
          <Testimonial {...item} />
        ))}
      </div>
    </ContentLayout>
  );
}
