import { BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import ContentLayout from "./ui/content-layout";

export default function About() {
  return (
    <ContentLayout className="relative bg-[#FAF9FB]">
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="font-semibold text-4xl/14">About Us</h2>
          <div className="flex flex-col gap-6 text-lg/7">
            <p>
              For over a decade, Pet Clique has been dedicated to redefining the landscape of pet
              care, creating a haven where pets experience unwavering love, and pet owners find
              peace of mind.
            </p>
            <p>
              Our vision at Pet Clique is to cultivate a world where every pet flourishes in a
              nurturing, safe, and loving environment. From our pet care services to the expert
              veterinary attention endorsed by professionals, our goal is to ensure the happiness,
              health, and comfort of every furry friend entrusted to us.
            </p>
            <p>
              We aim to engage our community, advocating for pet wellness, education, and support.
              Pet Clique stands as a beacon of our passion for pets—a sanctuary where exceptional
              care meets unwavering dedication, creating a joyful and secure haven for our beloved
              furry friends.
            </p>
          </div>
          <Button variant="default" size="lg" className="gap-2 w-fit mt-6">
            <span>Learn More</span>
            <BookOpen className="mt-1.5"/>
          </Button>
        </div>
        <div className="flex-1 hidden lg:grid grid-cols-2 gap-4 lg:gap-8">
          <div className="h-[292px] rounded-[13px] overflow-hidden col-span-2">
            <img className="h-full w-full" src="/images/about-two-span.png" alt="About us Images" />
          </div>
          <div className="h-[292px] rounded-[13px] overflow-hidden col-span-1">
            <img
              className="h-full w-full"
              src="/images/about-one-span-1.png"
              alt="About us Images"
            />
          </div>
          <div className="h-[292px] rounded-[13px] overflow-hidden col-span-1">
            <img
              className="h-full w-full"
              src="/images/about-one-span-2.png"
              alt="About us Images"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-16">
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-[1px] bg-black mb-4" />
          <h4>HAPPY PETS SERVED</h4>
          <h2 className="font-bold text-6xl">10,000</h2>
          <p className="text-lg">
            At Pet Clique, we take immense pride in our legacy of serving over 10,000 happy pets.
            Each tail wag, each purr, and every chirp represents a testament to our unwavering
            commitment to providing exceptional care.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-[1px] bg-black mb-4" />
          <h4>CUSTOMER SATISFACTION</h4>
          <h2 className="font-bold text-6xl">95%</h2>
          <p className="text-lg">
            At Pet Clique, our commitment to excellence is reflected in our proud achievement of a
            95% customer satisfaction rate. We take pride in going above and beyond to ensure every
            pet receives the utmost care.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="h-[1px] bg-black mb-4" />
          <h4>SKILLED PET NANNIES AND VET DOCTORS</h4>
          <h2 className="font-bold text-6xl">100+</h2>
          <p className="text-lg">
            Our team comprises over 100 skilled pet nannies, each dedicated to providing
            unparalleled care for your cherished companions. Paired with a network of qualified
            professional vet doctors.
          </p>
        </div>
      </div>
      <img className="hidden lg:block absolute right-0 top-0 pt-18" src="/images/right-circles.png" alt="Right Circle" />
      <img className="hidden lg:block absolute left-0 bottom-0 pb-18" src="/images/left-circles.png" alt="Left Circle" />
    </ContentLayout>
  );
}
