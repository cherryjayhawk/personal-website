import { ReactNode } from "react"

function BlogSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-dvh w-full">
        { children }
    </div>
  )
}

export default BlogSection