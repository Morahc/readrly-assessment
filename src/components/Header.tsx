import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex-1 border flex justify-between items-center py-[30px] bg-primary">
      <h2>PetClique</h2>
      <ul className="flex items-center gap-4 text-base lg:text-lg font-medium text-white">
        <li>About Us</li>
        <li>Testimonial</li>
        <li>Services</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <Button variant={"secondary"} className="gap-2">
        <span>Get Started</span> <ArrowRight />
      </Button>
    </header>
  );
}
