'use client'
import { useState } from 'react'
import Icon from '../common/Icon'

const HomePage = () => {
  const [isWhiteIconHovered, setIsWhiteIconHovered] = useState<boolean>(false)
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[url('/background/BG_Welcome.png')] bg-cover bg-center gap-2">
      <div className="text-[40px] font-semibold text-white font-poppins">
        We have
      </div>
      <div className="text-[88px] font-semibold text-white font-poppins">
        A Special Deal
      </div>
      <div className="text-[72px] font-normal text-white font-old-standard-tT italic">
        For you
      </div>
      <div
        onMouseEnter={() => setIsWhiteIconHovered(true)}
        onMouseLeave={() => setIsWhiteIconHovered(false)}
        className="transition-transform duration-300 hover:scale-150"
      >
        <div className="relative">
          <div
            className={`transition-opacity duration-300 ${
              isWhiteIconHovered ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Icon path="/nextpage_white.svg" size={48} />
          </div>
          <div
            className={`absolute top-0 left-0 transition-opacity duration-300 ${
              isWhiteIconHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Icon path="/nextpage_blue.svg" size={72} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage
