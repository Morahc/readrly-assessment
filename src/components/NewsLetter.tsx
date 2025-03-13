import { ArrowRight } from "lucide-react";
import ContentLayout from "./ui/content-layout";

export default function NewsLetter() {
  return (
    <ContentLayout className="relative h-screen lg:h-[1399px] bg-[url(/images/newsletter-bg.png)] bg-center bg-no-repeat">
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold text-4xl">
            Discover the Latest and Stay in the Loop with Pet Clique
          </h2>
          <p className="text-lg font-satoshi">
            Explore the world of pet care innovation and stay connected with Pet Clique. Our latest
            updates, heartwarming stories, and expert tips await you. Discover the best in pet care
            and ensure your furry friend thrives with the latest from Pet Clique.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center border-b border-white py-6">
            <input
              className="flex-1 text-2xl placeholder:font-semibold placeholder:text-2xl focus:ring-0 focus:outline-0"
              placeholder="Enter your email"
              type="text"
            />
            <ArrowRight className="size-10" />
          </div>
          <p className="font-satoshi text-lg">
            By Clicking Sign-Up, you are confirming that you agree with our{" "}
            <span className="font-medium">Terms and Conditions</span>
          </p>
        </div>
      </div>
    </ContentLayout>
  );
}
