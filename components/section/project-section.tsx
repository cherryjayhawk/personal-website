import { ReactNode } from "react"

function ProjectSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-dvh w-full z-10">
        { children }
    </div>
  )
}

export default ProjectSection