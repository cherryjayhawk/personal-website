import { ReactNode } from "react"

function ProjectSection({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-dvh w-full">
        { children }
    </div>
  )
}

export default ProjectSection