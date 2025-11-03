import { BackgroundBeams } from "../ui/background-beams";
import { Spotlight } from "../ui/spotlight";
import Introduction from "../ui/introduction";
import SocialMedia from "../ui/social-media";
import Avatar from "../ui/avatar";
import LandingPageText from "../ui/landing-page-text";
// import RippleButton from "../ui/ripple-button";
import Link from "next/link";

function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-dvh max-w-7xl mx-auto text-white overflow-hidden">
      <Spotlight
        className="-top-10 left-20 md:left-60 md:-top-20"
        fill="#e5e5e5"
      />
      <div className="flex flex-col-reverse px-8 md:p-0 sm:flex-row items-center justify-center w-screen gap-20 sm:h-[185px]">
        <div className="flex flex-col justify-start">
          <Introduction />
          <SocialMedia />
        </div>
        <div className="flex justify-start">
          <Avatar />
        </div>
      </div>
      <div className="flex gap-4 mt-4 sm:mt-8">
        <LandingPageText />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default LandingPage;
