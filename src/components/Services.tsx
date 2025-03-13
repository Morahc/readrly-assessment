import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import ContentLayout from "./ui/content-layout";

export default function Services() {
  return (
    <ContentLayout>
      <div className="flex flex-col gap-20">
        <div className="flex-1 flex flex-col gap-4 lg:flex-row justify-between">
          <h4 className="font-semibold text-4xl ">Our Tailored Services</h4>
          <p className="text-lg max-w-xl">
            Discover unparalleled care with Pet Clique's tailored services. From attentive pet
            nannies to expert veterinary care, we cater to your pet's unique needs. Your pet's
            comfort and well-being are our top priorities.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2 lg:gap-8 text-white">
          <div className="relative col-span-2 p-5 flex flex-col gap-3 bg-[#D421A4] rounded-xl h-[383px]">
            <h4 className="text-[28px]/[39px] font-semibold">Pet Care Services</h4>
            <p className="text-lg/7 font-satoshi w-[80%] text-[#E0DFE1]">
              Indulge your pet in luxury with our comprehensive pet care services. From grooming to
              playtime, we prioritize your pet's well-being, ensuring they feel loved and pampered.
            </p>
            <Button size="lg" className="w-fit mt-auto">
              <span>Get Started</span> <ArrowRight />
            </Button>
            <img
              className="absolute bottom-0 right-0"
              src="/images/services-span-two-row-one.png"
              alt=""
            />
          </div>
          <div className="relative p-5 flex flex-col gap-3 bg-[#9B20CF] rounded-xl h-[383px]">
            <h4 className="text-[28px]/[39px] font-semibold">Pet Nanny Assistance</h4>
            <p className="text-lg/7 font-satoshi w-1/2 text-[#E0DFE1]">
              Our dedicated pet nannies provide a home away from home. With personalized attention
              your pet will thrive in the care of our experienced and loving team.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="/images/services-span-one-row-one.png"
              alt=""
            />
          </div>
          <div className="relative p-5 flex flex-col gap-3 bg-[#CB4E20] rounded-xl h-[383px]">
            <h4 className="text-[28px]/[39px] font-semibold">Veterinary Care</h4>
            <p className="text-lg/7 font-satoshi w-1/2 text-[#E0DFE1]">
              Health is wealth, even for our four-legged friends. Our expert veterinary care ensures
              your pet receives top-notch medical attention, and healthy life for your beloved
              companion.
            </p>
            <img
              className="absolute bottom-0 right-0"
              src="/images/services-span-one-row-two.png"
              alt=""
            />
          </div>
          <div className="relative col-span-2 p-5 flex flex-col gap-3 bg-[#214CCF] rounded-xl h-[383px]">
            <h4 className="text-[28px]/[39px] font-semibold">Animal Home Retreats</h4>
            <p className="text-lg/7 font-satoshi text-[#E0DFE1]">
              Give your pet a vacation of their own with our exclusive Animal Home Retreats. A
              secure and comfortable environment for your furry companion.
            </p>
            <Button size="lg" variant="outline" className="w-fit border-white mt-auto">
              <span>Learn More</span> <BookOpen className="mt-1.5" />
            </Button>
            <img
              className="absolute bottom-0 right-0"
              src="/images/services-span-two-row-two.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
