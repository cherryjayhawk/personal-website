import PageContainer from "@/components/section/page-container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Read blogs where I shared my experiences and thoughts.',
}

function BlogPage() {
  return (
    <PageContainer>
      <div>BlogPage</div>
    </PageContainer>
  )
}

export default BlogPage