import {
  FadeInForwards,
  FadeInRight,
  FadeInLeft,
  FadeInUp,
} from "@/components/ui/fade-in";
import { Separator } from "@/components/ui/separator";
import PageContainer from "@/components/section/page-container";
import ProjectSection from "@/components/section/project-section";
import { Metadata } from "next";
import {
  Apollo,
  Docker,
  Expressjs,
  FastAPI,
  GraphQL,
  Laravel,
  MongoDB,
  Nextjs,
  PostgreSQL,
  Sanity,
  TailwindCSS,
} from "@/components/ui/svg";
import Image from "next/image";
import agrosmartsystem from "@/public/agrosmartsystem.png";
import pelayanquran from "@/public/pelayanquran.png";
import medistock from "@/public/medistock.png";
import agrofit from "@/public/agrofit.png";
import crm from "@/public/crm.png";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects to see a glimpse into my progress and demonstrates my ability to tackle coding challenges.",
};
const ProjectPage: React.FC = () => {
  return (
    <PageContainer className="">
      <div className="snap-y snap-mandatory h-screen w-full overflow-y-scroll overflow-x-hidden scrollbar-hide">
        {/* PELAYANQURAN.ID */}
        <ProjectSection>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh">
            <div className="flex flex-col justify-end md:justify-center min-w-full gap-4 px-12 pb-8 md:p-8">
              <FadeInForwards>
                <Image src={pelayanquran} alt="" />
              </FadeInForwards>
            </div>
            <div className="flex flex-col justify-start md:justify-center min-w-full gap-4 px-12 md:p-8">
              <FadeInForwards duration={1.2}>
                <h1 className="text-xl md:text-2xl font-bold">
                  PELAYANQURAN.ID
                </h1>
              </FadeInForwards>
              <FadeInRight duration={1.2}>
                <p className="text-sm text-justify md:text-start md:text-base">
                  A donation platform that enables individuals to participate in
                  Quran endowments &#40;wakaf&#41; by funding the printing and
                  distribution of Qurans to Islamic educational institutions.
                  Built for a non-profit Quran printing foundation, it ensures a
                  transparent, secure, and impactful donation process. Features
                  include a user-friendly admin dashboard, real-time donation
                  tracking, and educational content to build donor trust.
                </p>
              </FadeInRight>
              <FadeInUp duration={1.2}>
                <div className="flex gap-4">
                  <Nextjs />
                  <TailwindCSS />
                  <Sanity />
                  <Expressjs />
                  <PostgreSQL />
                </div>
              </FadeInUp>
              <FadeInForwards delay={0.8}>
                <div className="flex gap-4">
                  <a href="https://fpq-web.vercel.app/" className="underline">
                    Demo
                  </a>
                  <a href="http://" className="underline">
                    GitHub
                  </a>
                </div>
              </FadeInForwards>
            </div>
          </div>
        </ProjectSection>

        {/* AGROSMARTSYSTEM.ID */}
        <ProjectSection>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh">
            <div className="flex flex-col justify-end md:justify-center min-w-full gap-4 px-12 pb-8 md:p-8">
              <FadeInForwards>
                <Image src={agrosmartsystem} alt="" />
              </FadeInForwards>
            </div>
            <div className="flex flex-col justify-start md:justify-center min-w-full gap-4 px-12 md:p-8">
              <FadeInForwards duration={1.2}>
                <h1 className="text-xl md:text-2xl font-bold">
                  AGROSMARTSYSTEM.ID
                </h1>
              </FadeInForwards>
              <FadeInRight duration={1.2}>
                <p className="text-sm text-justify md:text-start md:text-base">
                  Agrosmartsystem.id is a sophisticated web-based application
                  designed to monitor soil and environmental parameters in
                  agricultural settings both in real-time and historically. The
                  primary motivation behind developing this application is to
                  serve as a decision support tool for farmers, aiding them in
                  managing and treating their agricultural land more
                  effectively.
                </p>
              </FadeInRight>
              <FadeInUp duration={1.2}>
                <div className="flex gap-4">
                  <Nextjs />
                  <TailwindCSS />
                  <FastAPI />
                </div>
              </FadeInUp>
              <FadeInForwards delay={0.8}>
                <div className="flex gap-4">
                  <a
                    href="https://agrosmartsystem.vercel.app/"
                    className="underline"
                  >
                    Demo
                  </a>
                  <a href="http://" className="underline">
                    GitHub
                  </a>
                </div>
              </FadeInForwards>
            </div>
          </div>
        </ProjectSection>

        {/* Agrofit */}
        <ProjectSection>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh">
            <div className="flex flex-col justify-end md:justify-center min-w-full gap-4 px-12 pb-8 md:p-8">
              <FadeInForwards>
                <Image src={agrofit} alt="" />
              </FadeInForwards>
            </div>
            <div className="flex flex-col justify-start md:justify-center min-w-full gap-4 px-12 md:p-8">
              <FadeInForwards duration={1.2}>
                <h1 className="text-xl md:text-2xl font-bold">AGROFIT</h1>
              </FadeInForwards>
              <FadeInRight duration={1.2}>
                <p className="text-sm text-justify md:text-start md:text-base">
                  Agrofit is a smart agriculture platform that delivers
                  real-time crop recommendations based on soil parameters
                  captured by IoT devices. The system processes incoming sensor
                  data through a self-deployed machine learning model and
                  responds with optimized crop suggestions. Designed for
                  seamless IoT integration and low-latency performance, Agrofit
                  is enabling reliable and data-driven decision-making directly
                  in the field.
                </p>
              </FadeInRight>
              <FadeInUp delay={1.2}>
                <div className="flex gap-4">
                  <FastAPI />
                  <MongoDB />
                </div>
              </FadeInUp>
              <FadeInForwards delay={0.8}>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/cherryjayhawk/reco-api"
                    className="underline"
                  >
                    GitHub
                  </a>
                </div>
              </FadeInForwards>
            </div>
          </div>
        </ProjectSection>

        {/* Medistock */}
        <ProjectSection>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh">
            <div className="flex flex-col justify-end md:justify-center min-w-full gap-4 px-12 pb-8 md:p-8">
              <FadeInForwards>
                <Image src={medistock} alt="" />
              </FadeInForwards>
            </div>
            <div className="flex flex-col justify-start md:justify-center min-w-full gap-4 px-12 md:p-8">
              <FadeInForwards duration={1.2}>
                <h1 className="text-xl md:text-2xl font-bold">MEDISTOCK</h1>
              </FadeInForwards>
              <FadeInRight duration={1.2}>
                <p className="text-sm text-justify md:text-start md:text-base">
                  Medistock is an inventory management platform designed for
                  pharmacies to streamline stock control, purchasing, and
                  transaction workflows. It reduces operational risk through
                  low-stock and expiration alerts, supports batch tracking, and
                  maintains purchasing records. Medistock improves inventory
                  accuracy, enhances compliance, and enables smarter procurement
                  through real-time stock visibility.
                </p>
              </FadeInRight>
              <FadeInUp delay={1.2}>
                <div className="flex gap-4">
                  <Laravel />
                  <TailwindCSS />
                  <PostgreSQL />
                </div>
              </FadeInUp>
              <FadeInForwards delay={0.8}>
                <div className="flex gap-4">
                  <a
                    href="https://414-medistock.laravel.cloud/"
                    className="underline"
                  >
                    Demo
                  </a>
                  <a
                    href="https://github.com/Kelompok414/medistock2"
                    className="underline"
                  >
                    GitHub
                  </a>
                </div>
              </FadeInForwards>
            </div>
          </div>
        </ProjectSection>

        {/* CRM */}
        <ProjectSection>
          <div className="grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh">
            <div className="flex flex-col justify-end md:justify-center min-w-full gap-4 px-12 pb-8 md:p-8">
              <FadeInForwards className="flex justify-center">
                <Image height={320} src={crm} alt="" />
              </FadeInForwards>
            </div>
            <div className="flex flex-col justify-start md:justify-center min-w-full gap-4 px-12 md:p-8">
              <FadeInForwards duration={1.2}>
                <h1 className="text-xl md:text-2xl font-bold">
                  CRM MICROSERVICES
                </h1>
              </FadeInForwards>
              <FadeInRight duration={1.2}>
                <p className="text-sm text-justify md:text-start md:text-base">
                  A customer relationship management platform designed to help
                  businesses manage client interactions with flexibility and
                  efficiency. Built on a scalable microservices architecture, it
                  ensures adaptability and reliable performance. With
                  GraphQL-powered APIs and modular service design, the system
                  supports real-time updates and tailored data access for
                  responsive customer experiences.
                </p>
              </FadeInRight>
              <FadeInUp delay={1.2}>
                <div className="flex gap-4">
                  <GraphQL />
                  <Apollo />
                  <PostgreSQL />
                  <Docker />
                </div>
              </FadeInUp>
              <FadeInForwards delay={0.8}>
                <div className="flex gap-4">
                  <a href="http://" className="underline">
                    Demo
                  </a>
                  <a
                    href="https://github.com/cherryjayhawk/crm-graphql"
                    className="underline"
                  >
                    GitHub
                  </a>
                </div>
              </FadeInForwards>
            </div>
          </div>
        </ProjectSection>
      </div>
    </PageContainer>
  );
};

export default ProjectPage;
