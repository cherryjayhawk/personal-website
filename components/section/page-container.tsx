"use client"
import { ReactNode } from 'react'

function PageContainer({ children }: { children: ReactNode}) {
    return (
        <div className="flex flex-col min-h-dvh w-dvw max-w-7xl pt-24 mx-auto text-foreground">
            { children }
        </div>
    )
}

export default PageContainer