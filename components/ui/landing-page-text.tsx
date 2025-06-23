"use client";
import { LinkPreview } from "@/components/ui/link-preview";

export function LandingPageText() {
  return (
    <div className="flex justify-center items-start flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-3xl  text-left mb-10">
        Visit{" "}
        <LinkPreview
          url="https://mubirastudio.vercel.app/about"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          About Me
        </LinkPreview>{" "}
        or{" "}
        <LinkPreview
          url="https://mubirastudio.vercel.app/about"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          My Projects
        </LinkPreview>{" "}
        to learn more.
      </p>
    </div>
  );
}

export default LandingPageText;
