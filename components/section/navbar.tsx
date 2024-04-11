"use client"

import { usePathname } from "next/navigation";
import { Lusitana } from "next/font/google";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import ModeToggle from "@/components/ui/mode-toggle";
import Link from "next/link";
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
  } from "@/components/ui/table"

const lusitana = Lusitana({ 
    subsets: ["latin"],
    weight: ["400"] 
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400"]
})

function Navbar() {
    const path = usePathname()

  return (
    <>
        <div className="flex justify-center items-center h-16 px-8 2xl:px-2 z-10 fixed w-full">
            <div className="flex justify-between items-center text-white w-full max-w-7xl mx-auto">
                <div className={cn(lusitana.className, "text-lg shadow-white", path === "/" ? "text-white" : "text-neutral-900 dark:text-white")}>MUBIRASTUDIO</div>
                <div className="hidden md:flex items-center gap-8">
                    <div>
                        <Link href="/" className={cn(montserrat.className, "text-xs text-neutral-400", path === "/" && "text-white")}>HOME</Link>
                    </div>
                    <div>
                        <Link href="/blog" className={cn(montserrat.className, "text-xs text-neutral-400", path === "/blog" && "text-neutral-900 dark:text-white")}>BLOG</Link>
                    </div>
                    <div>   
                        <Link href="/projects" className={cn(montserrat.className, "text-xs text-neutral-400", path === "/projects" && "text-neutral-900 dark:text-white")}>PROJECTS</Link>
                    </div>
                    <div>
                        <Link href="/about" className={cn(montserrat.className, "text-xs text-neutral-400", path === "/about" && "text-neutral-900 dark:text-white")}>ABOUT</Link>
                    </div>
                    <ModeToggle usage={null} />
                </div>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild className="hover:cursor-pointer">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent className="bg-background">
                            <SheetHeader>  
                                <SheetDescription asChild className="mt-8">
                                    <Table>
                                        <TableCaption>
                                            <ModeToggle usage={"mobile"} />
                                        </TableCaption>
                                        <TableBody>
                                            <TableRow>
                                                <Link href={"/"}>
                                                    <SheetClose>
                                                        <TableCell className={cn(montserrat.className, "text-xs text-neutral-400 w-dvw", path === "/" && "text-neutral-900 dark:text-white")}>HOME</TableCell>
                                                    </SheetClose>
                                                </Link>
                                            </TableRow>
                                            <TableRow>
                                                <Link href={"/blog"}>
                                                    <SheetClose>
                                                        <TableCell className={cn(montserrat.className, "text-xs text-neutral-400 w-dvw", path === "/blog" && "text-neutral-900 dark:text-white")}>BLOG</TableCell>
                                                    </SheetClose>
                                                </Link>
                                            </TableRow>
                                            <TableRow>
                                                <Link href={"/projects"}>
                                                    <SheetClose>
                                                        <TableCell className={cn(montserrat.className, "text-xs text-neutral-400 w-dvw", path === "/projects" && "text-neutral-900 dark:text-white")}>PROJECTS</TableCell>
                                                    </SheetClose>
                                                </Link>
                                            </TableRow>
                                            <TableRow>
                                                <Link href={"/about"}>
                                                    <SheetClose>
                                                        <TableCell className={cn(montserrat.className, "text-xs text-neutral-400 w-dvw", path === "/about" && "text-neutral-900 dark:text-white")}>ABOUT</TableCell>
                                                    </SheetClose>
                                                </Link>
                                            </TableRow>
                                        </TableBody>
                                        </Table>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar