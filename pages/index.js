// import { Inter } from 'next/font/google'
import HeroSection from "../components/herosection"
import Image from "next/image"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      
      <Image
        src="background.svg"
        quality={100}
        layout = "fill"
        objectFit="cover"
        alt=""
      />
      <HeroSection/>
      
    </>
  )
}