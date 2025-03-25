'use client'
import ReviewForm from '@/app/(components)/ReviewForm'
import Navbar from '@/common/Navbar'
import { useForm } from '@/provider/FormStateContext'
// import { FormAttributes } from '@/types/type'

const ReviewPage = () => {
  const { isHaveData } = useForm()
  if (!isHaveData) {
    window.location.href = '/home'
  }
  return (
    <div className="relative">
      <Navbar />
      <div className="grid grid-cols-2 h-screen w-screen bg-[url('/background/BG_EnterTextField.png')] bg-cover bg-center p-40">
        <div className="flex flex-col justify-center mt-16">
          <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl leading-10">
            Please Confirm
          </div>
          <div className="text-[48px] font-semibold text-white font-poppins drop-shadow-xl">
            Your Information
          </div>
        </div>
        <div className="flex justify-between items-center max-w-[490px] my-16">
          <ReviewForm />
        </div>
      </div>
    </div>
  )
}
export default ReviewPage
