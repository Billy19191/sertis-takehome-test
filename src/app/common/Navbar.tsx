import { FC } from 'react'
import Image from 'next/image'
const Navbar: FC = () => {
  return (
    <div className="h-16 px-[40px] py-[18px] bg-transparent absolute  ">
      <Image src="/logo.svg" alt="logo" width={73} height={28} />
    </div>
  )
}
export default Navbar
