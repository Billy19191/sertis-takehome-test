'use client'
import { FC } from 'react'
import Icon from '../../../common/Icon'
import Navbar from '../../../common/Navbar'

import { useForm } from '@/provider/FormStateContext'

const SuccessPage: FC = () => {
  const { formValues } = useForm()
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-[url('/background/BG_Success.png')] bg-cover bg-center gap-y-5">
        <div className="flex justify-center items-center bg-success w-[90px] h-[90px] rounded-full">
          <Icon path="/icon/check_white.svg" size={48} />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[48px] font-semibold text-white font-poppins ">
            Thank you
          </div>
          <div className="text-[48px] font-semibold text-white font-poppins leading-10">
            {formValues?.firstname ?? 'Guest'}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-[16px] text-white font-poppins ">
            Our special deal has been sent to {formValues?.email}.
          </div>
          <div className="text-[16px] text-white font-poppins ">
            if you have not received, please contact us.
          </div>
        </div>
      </div>
    </div>
  )
}
export default SuccessPage
