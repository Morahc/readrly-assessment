import { ArrowRight, ChevronDown} from "lucide-react";
import { Button } from "../ui/button";
import ContentLayout from "../ui/content-layout";
import Flag from "@/assets/icons/flag";
import Facebook from "@/assets/icons/Facebook";
import Instagram from "@/assets/icons/Instagram";
import Twitter from "@/assets/icons/Twitter";
import Telegram from "@/assets/icons/Telegram";

export default function Footer() {
  return (
    <ContentLayout className="flex flex-col gap-12 bg-secondary bg-[url(/images/footer-pattern.png)] bg-blend-overlay bg-cover">
      <h1 className="text-[150px] lg:text-[249px] font-bold text-center ">PetClique</h1>
      <Button variant="outline" className="py-10 text-[32px]">
        Get Started <ArrowRight className="size-8" />
      </Button>
      <ul className="flex justify-center gap-16 text-2xl font-semibold pb-16">
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Blog</li>
      </ul>
      <div className="flex items-center justify-center gap-8">
        <Facebook />
        <Instagram />
        <Twitter />
        <Telegram/>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">2023 All rights reserved</p>
        <ul className="flex items-center gap-8 text-lg font-medium">
          <li>helloservices@petclique.org</li>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="flex items-center gap-2">
          <Flag />
          <ChevronDown className="size-4" />
        </div>
      </div>
    </ContentLayout>
  );
}
