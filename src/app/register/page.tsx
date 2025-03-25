'use client'
import Form from '@/(components)/Form'
import Navbar from '@/common/Navbar'
import { CountryCode } from '@/types/type'
import { FC, useEffect, useState } from 'react'

const Register: FC = () => {
  const [data, setData] = useState<CountryCode[]>([])
  const fetchCountryCodeData = async () => {
    const response = await fetch('/data/countrycode.json')
    const data = await response.json()
    setData(data)
  }
  useEffect(() => {
    fetchCountryCodeData()
  }, [])
  return (
    <div className="relative">
      <Navbar />
      <div className="grid grid-cols-2 h-screen w-screen bg-[url('/background/BG_EnterTextField.png')] bg-cover bg-center ">
        <div className="flex flex-col justify-center mt-16 ml-40">
          <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl leading-10">
            Enter Your
          </div>
          <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl">
            Information To
          </div>
          <div className="text-[56px] font-normal text-white font-old-standard-tT italic drop-shadow-2xl leading-14">
            Get A Special Deal
          </div>
        </div>
        <div className="flex justify-between items-center max-w-[490px] my-16 mr-40">
          <Form data={data} />
        </div>
      </div>
    </div>
  )
}
export default Register
