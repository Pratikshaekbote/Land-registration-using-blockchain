// import { Inter } from 'next/font/google'
import HeroSection from "./components/herosection"
import Image from "next/image"
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="stack">
        <div className="stack-child">
          <Image
            src="background.svg"
            quality={100}
            // layout = "fill"
            objectFit="cover"
            alt=""
            width="100"
            height="100"
          />
        </div>
        <div className="stack-child">
          <HeroSection/>
        </div>
      </div>
    </>
  )
}