import BlogSection from "@/components/section/blog-section"
import PageContainer from "@/components/section/page-container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read blogs where I shared my experiences and thoughts.',
}

function BlogPage() {
  return (
    <PageContainer>
      <BlogSection>Maintenance</BlogSection>
    </PageContainer>
  )
}

export default BlogPage