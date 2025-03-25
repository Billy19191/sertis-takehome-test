import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar: FC = () => {
  return (
    <div className="h-16 px-[40px] py-[18px] bg-transparent absolute">
      <Link href="/home">
        <Image src="/logo.svg" alt="logo" width={73} height={28} />
      </Link>
    </div>
  )
}
export default Navbar
