import { FadeInForwards, FadeInRight, FadeInLeft, FadeInUp } from '@/components/ui/fade-in';
import PageContainer from '@/components/section/page-container';
import ProjectSection from '@/components/section/project-section';
import { Metadata } from "next"
import { Expressjs, FastAPI, MongoDB, Nextjs, Sanity, TailwindCSS } from '@/components/ui/svg';
import Image from 'next/image';
import agrosmartsystem from '@/public/agrosmartsystem.png'

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore projects to see a glimpse into my progress and demonstrates my ability to tackle coding challenges.',
}
const ProjectPage: React.FC = () => {
  return (
    <PageContainer>
      
      {/* AGROSMARTSYSTEM.ID */}
      <ProjectSection>
        <div className='grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh'>
          <div className='flex justify-center items-center w-full p-8'>
            <FadeInForwards>
              <Image src={agrosmartsystem} alt='' />
            </FadeInForwards>
          </div>
          <div className='flex flex-col justify-center min-w-full gap-4 p-8'>
            <FadeInForwards duration={1.2}>
              <h1 className='text-2xl font-bold'>AGROSMARTSYSTEM.ID</h1>
            </FadeInForwards>
            <FadeInRight duration={1.2}>
              <p>Agrosmartsystem.id is a sophisticated web-based application designed to monitor soil and environmental parameters in agricultural settings both in real-time and historically. The primary motivation behind developing this application is to serve as a decision support tool for farmers, aiding them in managing and treating their agricultural land more effectively.</p>
            </FadeInRight>
            <FadeInUp duration={1.2}>
              <div className='flex gap-4'>
                <Nextjs/>
                <TailwindCSS/>
                <FastAPI/> 
              </div>
            </FadeInUp>
          </div>
        </div>      
      </ProjectSection>

      {/* PELAYANQURAN.ID */}
      <ProjectSection>
        <div className='grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh'>
          <div className='flex justify-start'></div>
          <div className='flex flex-col justify-center min-w-full gap-4 p-8'>
            <FadeInForwards duration={1.2}>
              <h1 className='text-2xl font-bold'>PELAYANQURAN.ID</h1>
            </FadeInForwards>
            <FadeInRight duration={1.2}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam necessitatibus sit voluptas placeat aliquid ratione deleniti alias laboriosam porro, non molestiae ex soluta ipsum, odit rerum ut molestias beatae.</p>
            </FadeInRight>
            <FadeInUp duration={1.2}>
              <div className='flex gap-4'>
                <Nextjs/>
                <Sanity/>
                <Expressjs/>
                <TailwindCSS/>
              </div>
            </FadeInUp>
          </div>
        </div>      
      </ProjectSection>

      {/* Recco Webservice */}
      <ProjectSection>
        <div className='grid grid-cols-1 md:grid-cols-2 min-w-full min-h-dvh'>
          <div className='flex justify-start'></div>
          <div className='flex flex-col justify-center min-w-full gap-4 p-8'>
            <FadeInForwards duration={1.2}>
              <h1 className='text-2xl font-bold'>RECCO WEBSERVICE</h1>
            </FadeInForwards>
            <FadeInRight duration={1.2}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ullam necessitatibus sit voluptas placeat aliquid ratione deleniti alias laboriosam porro, non molestiae ex soluta ipsum, odit rerum ut molestias beatae.</p>
            </FadeInRight>
            <FadeInUp delay={1.2}>
              <div className='flex gap-4'>
                <FastAPI/>
                <MongoDB/>
              </div>
            </FadeInUp>
          </div>
        </div>      
      </ProjectSection>
    </PageContainer>
  );
};

export default ProjectPage;