import { ReactNode } from 'react'

function PageContainer({ children }: { children: ReactNode}) {
    return (
        <div className="flex min-h-dvh w-dvw max-w-7xl pt-24 mx-auto text-foreground">
            { children }
        </div>
    )
}

export default PageContainer