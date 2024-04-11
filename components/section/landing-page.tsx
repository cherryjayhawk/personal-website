import { BackgroundBeams } from "../ui/background-beams"
import { Spotlight } from "../ui/spotlight"
import Introduction from "../ui/introduction"
import SocialMedia from "../ui/social-media"
import Avatar from "../ui/avatar"

function LandingPage() {
  return (
    <div className="flex items-center min-h-dvh max-w-7xl mx-auto text-white">
      <Spotlight
        className="-top-10 left-20 md:left-60 md:-top-20"
        fill="#e5e5e5"
       />
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-screen gap-20 h-[185px]">
            <div className="flex flex-col justify-start">
                <Introduction />
                <SocialMedia />
            </div>
            <div className="flex justify-start">
                <Avatar />
            </div>
        </div>
        <BackgroundBeams />
    </div>
  )
}

export default LandingPage