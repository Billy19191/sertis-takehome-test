'use client'
import { FC, useState } from 'react'
import Icon from '../../common/Icon'
import Navbar from '../../common/Navbar'
import Link from 'next/link'

const HomePage: FC = () => {
  const [isWhiteIconHovered, setIsWhiteIconHovered] = useState<boolean>(false)
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-[url('/background/BG_Welcome.png')] bg-cover bg-center">
        <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl leading-6">
          We Have
        </div>
        <div className="text-[88px] font-semibold text-white font-poppins drop-shadow-2xl leading-36">
          A Special Deal
        </div>
        <div className="text-[80px] font-normal text-white font-old-standard-tT italic drop-shadow-2xl leading-14">
          For You
        </div>
        <div
          onMouseEnter={() => setIsWhiteIconHovered(true)}
          onMouseLeave={() => setIsWhiteIconHovered(false)}
          className="mt-16 transition-transform duration-300 hover:scale-150"
        >
          <div className="relative">
            <div
              className={`transition-opacity duration-300 ease-linear ${
                isWhiteIconHovered ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Icon path="/nextpage_white.svg" size={48} />
            </div>
            <div
              className={`absolute top-0 left-0 transition-opacity duration-300 ease-linear ${
                isWhiteIconHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Link href="/register">
                <Icon path="/nextpage_blue.svg" size={72} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
