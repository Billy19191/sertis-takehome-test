import React from 'react'
import Image from 'next/image'

interface IconProps {
  path?: string
  size?: number
}

const Icon: React.FC<IconProps> = ({ path = '', size = 24 }) => {
  return (
    <div>
      {path && (
        <Image
          src={path}
          alt="icon"
          width={size}
          height={size}
          style={{
            objectFit: 'contain',
            filter: 'invert(1)',
          }}
        />
      )}
    </div>
  )
}
export default Icon
