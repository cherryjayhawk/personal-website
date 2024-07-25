import PageContainer from "@/components/section/page-container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Me',
    description: 'Work experiences, skills, and more about me.',
}
  
function AboutPage() {
  return (
    <PageContainer>
        <div>AboutPage</div>
    </PageContainer>
  )
}

export default AboutPage