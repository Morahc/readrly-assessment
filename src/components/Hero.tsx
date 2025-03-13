import { ArrowRight, BookOpen, Menu } from "lucide-react";
import { Button } from "./ui/button";
import HundredPoints from "@/assets/icons/HundredPoints";

const navigation = [
  { name: "About Us", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Services", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Hero() {
  return (
    <section className="bg-primary text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="py-4 bg-[#120A15] font-satoshi text-lg flex justify-center gap-4">
          <p>Limited-Time Welcome Offer: $30 Off</p>
          <p className="text-secondary">02:33:24</p>
          <ArrowRight className="text-white" />
        </div>
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <h2 className="font-bold text-2xl/9">PetClique</h2>
          </div>
          <div className="flex lg:hidden">
            <Menu className="size-6" />
          </div>
          <div className="hidden lg:flex lg:gap-x-14">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg/7 font-medium">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button size="lg" variant="secondary">
              Get Started <ArrowRight />
            </Button>
          </div>
        </nav>
      </header>

      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pt-48 relative">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="rounded-full px-6 py-3 text-sm/5 ring-1 flex gap-3">
              Pet Clique: A Paws-itive Difference in Pet Care
              <HundredPoints />
            </div>
          </div>
          <div className="text-center space-y-10">
            <h1 className="text-[69px]/[90px] font-bold text-balance">
              Exceptional <span className="text-secondary">Pet Care</span> Tailored for You
            </h1>
            <p className="text-lg/7 font-medium">
              At Pet Clique, we go beyond pet care. From pet nannies to veterinary services, your
              pet's happiness is our priority. Travel worry-free knowing your furry friend is in
              trusted hands. Join us today for a paw-sitively extraordinary experience!
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Button size="lg" variant="secondary">
                Get started <ArrowRight />
              </Button>
              <Button size="lg" variant="outline" className="border-white">
                Learn more <BookOpen className="mt-1.5" />
              </Button>
            </div>
          </div>
        </div>
        <img src="/images/hero-img.png" className="mx-auto" alt="Hero Image" />
      </div>
    </section>
  );
}
