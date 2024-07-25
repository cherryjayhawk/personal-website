"use client"
import { TextGenerateEffect } from "@/components/text-generate-effect"
import { useEffect, useState } from "react"

function Introduction() {
  const [time1, setTime1] = useState(false)
  const [time2, setTime2] = useState(false)

  useEffect(()  => {
    setTimeout(() => {
      setTime1(true)
    }, 1500)
    setTimeout(() => {
      setTime2(true)
    }, 3000)
  }, [])
  
  return (
    <>
        <TextGenerateEffect words="Hello everyone! I'm" />
        {
          time1 ? (<TextGenerateEffect words="Muhammad Bintang Ramadhan" className="text-2xl font-semibold" />) : (<span className="text-2xl font-semibold leading-snug tracking-wide  mt-1 invisible">Muhammad Bintang Ramadhan</span>)
        }
        {
          time2 ? (<TextGenerateEffect words="A Software Engineer based in Bandung, Indonesia." />) : (<span className="leading-snug tracking-wide  mt-1 invisible">Software Developer based in Bandung, Indonesia.</span>)
        }
    </>
  )
}

export default Introduction