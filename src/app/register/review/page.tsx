'use client'
import ReviewForm from '@/app/(components)/ReviewForm'
import Navbar from '@/common/Navbar'
import { useForm } from '@/provider/FormStateContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const ReviewPage = () => {
  const router = useRouter()
  const { isHaveData } = useForm()

  useEffect(() => {
    if (!isHaveData) {
      router.push('/home')
    }
  }, [isHaveData, router])
  return (
    <div className="relative">
      <Navbar />
      <div className="lg:grid lg:grid-cols-2 h-screen w-screen bg-[url('/background/BG_EnterTextField.png')] bg-cover bg-center p-40">
        <div className="flex flex-col justify-center lg:mt-16 lg:max-w-[500px]">
          <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl leading-10">
            Please Confirm
          </div>
          <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl">
            Your Information
          </div>
        </div>
        <div className="flex justify-between items-center max-w-full lg:max-w-[490px] my-16">
          <ReviewForm />
        </div>
      </div>
    </div>
  )
}
export default ReviewPage
