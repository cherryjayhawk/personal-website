import BlogSection from "@/components/section/blog-section"
import PageContainer from "@/components/section/page-container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Work experiences, skills, and more about me.',
}
  
function AboutPage() {
  return (
    <PageContainer>
      <BlogSection>Maintenance</BlogSection>
    </PageContainer>
  )
}

export default AboutPage