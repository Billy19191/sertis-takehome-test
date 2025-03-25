import React from 'react'
import Image from 'next/image'

interface IconProps {
  path?: string
  size?: number
}

const Icon: React.FC<IconProps> = ({ path = '', size = 24 }) => {
  return (
    <div>
      {path && <Image src={path} alt="icon" width={size} height={size} />}
    </div>
  )
}
export default Icon
