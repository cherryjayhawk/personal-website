// @ts-nocheck
"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TransitionLink } from "./transition-link";

function LandingPageText() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);
  return (
    <div
      className={cn(
        !show
          ? "flex flex-row opacity-0 z-10"
          : "flex flex-row items-center gap-4 z-10 opacity-100 transition-opacity duration-1000"
      )}
    >
      <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-3xl text-left mb-10">
        Visit{" "}
        <TransitionLink href="/about" className="cursor-pointer font-bold text-white">
          About Me
        </TransitionLink>{" "}
        or{" "}
        <TransitionLink href="/projects" className="cursor-pointer font-bold text-white">
          My Projects
        </TransitionLink>{" "}to learn more.
      </p>
    </div>
  );
}

export default LandingPageText;
