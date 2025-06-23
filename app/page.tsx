import BlogSection from "@/components/section/blog-section";
import LandingPage from "@/components/section/landing-page";
import PageContainer from "@/components/section/page-container";
import ExperienceTimeline from "@/components/section/experience-timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Mubirastudio',
  description: 'A Software Engineer based in Bandung, Indonesia. See for more information about me.',
}

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <LandingPage />
      {/* <PageContainer> */}
        {/* <div className="z-10">
          <ExperienceTimeline />
        </div> */}
        {/* <div className="flex flex-col w-full justify-start p-8">
          <h1 className="font-semibold text-2xl text-center">Experience</h1>
          <br />
          <h4 className="font-semibold text-lg">Magang</h4>
          <p className="max-w-md">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quas, nihil reiciendis exercitationem eaque nam iste dolorem voluptatem soluta eos deserunt consequatur praesentium quis dolor ab qui distinctio numquam molestiae.</p>
        </div> */}
      {/* </PageContainer> */}
    </div>
  );
}