// "use client"
// import { FadeInForwards, FadeInRight, FadeInLeft } from '@/components/ui/fade-in';
import PageContainer from '@/components/section/page-container';
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore projects to see a glimpse into my progress and demonstrates my ability to tackle coding challenges.',
}
const ProjectPage: React.FC = () => {
  return (
    <PageContainer>
      {/* <div style={{ height: '100vh' }}>Scroll down to see the animations</div>
      <FadeInForwards>
        <h1>Fade In Forwards!</h1>
      </FadeInForwards>
      <FadeInRight>
        <h1>Fade In Right!</h1>
      </FadeInRight>
      <FadeInLeft>
        <h1>Fade In Left!</h1>
      </FadeInLeft>
      <div style={{ height: '100vh' }}></div> */}
      <div>ProjectPage</div>
    </PageContainer>
  );
};

export default ProjectPage;