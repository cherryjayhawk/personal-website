// "use client";
// import { LinkPreview } from "@/components/ui/link-preview";
import Link from "next/link";

export function LandingPageText() {
  return (
    <div className="flex justify-center items-start flex-col px-4">
      <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-3xl  text-left mb-10">
        Visit{" "}
        <Link
          // url="https://mubirastudio.vercel.app/about"
          href={"/about"}
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          About Me
        </Link>{" "}
        or{" "}
        <Link
          // url="https://mubirastudio.vercel.app/projects"
          href={"/projects"}
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          My Projects
        </Link>{" "}
        to learn more.
      </p>
    </div>
  );
}

export default LandingPageText;
