'use client'
import Icon from '@/common/Icon'

import Link from 'next/link'
import { useState } from 'react'

const NavigateButton = ({ path }: { path: string }) => {
  const [isWhiteIconHovered, setIsWhiteIconHovered] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setIsWhiteIconHovered(true)}
      onMouseLeave={() => setIsWhiteIconHovered(false)}
      className="transition-transform duration-300 hover:scale-110"
    >
      <div className="relative">
        <div
          className={`transition-opacity duration-300 ease-linear ${
            isWhiteIconHovered ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <button
            title="next"
            className="hidden lg:flex justify-center items-center w-12 h-12 border text-grey-sertis-800 border-white rounded-full"
          >
            <Icon path="/icon/next_white.svg" size={17} />
          </button>
          <button
            title="next"
            className="flex justify-center lg:hidden items-center w-12 h-12 border text-grey-sertis-800 border-white rounded-full"
          >
            <Icon path="/icon/next_down_white.svg" size={17} />
          </button>
        </div>

        <div
          className={`absolute top-0 left-0 transition-opacity duration-300 ease-linear ${
            isWhiteIconHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Link
            href={path}
            className="hidden lg:flex justify-center items-center w-12 h-12 border border-primary-500 bg-primary-500 hover:shadow-primary-500 text-white rounded-full"
          >
            <Icon path="/icon/next_white.svg" size={16.97} />
          </Link>
          <Link
            href={path}
            className="flex justify-center lg:hidden items-center w-12 h-12 border border-primary-500 bg-primary-500 hover:shadow-primary-500 text-white rounded-full"
          >
            <Icon path="/icon/next_white.svg" size={16.97} />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NavigateButton
