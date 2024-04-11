"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

function Avatar() {
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setMount(true)
        }, 400)
    }, [])

  return (
    <Image src={"/avatar.png"} width={160} height={160} alt="avatar" className={cn(!mount ? "opacity-0" : "opacity-100", "rounded-full z-10 transition-opacity duration-1000")} />
  )
}

export default Avatar