"use client"
import { ReactNode } from 'react'

function PageContainer({ children }: { children: ReactNode}) {
    return (
        <div className="min-h-dvh w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="flex flex-col min-h-dvh w-dvw max-w-7xl mx-auto text-foreground">
                { children }
            </div>
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
        </div>
    )
}

export default PageContainer