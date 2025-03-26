import { useForm } from '@/provider/FormStateContext'
import NextBlackButton from './NextBlackButton'
import NextGreyButton from './NextGreyButton'
import Icon from '@/common/Icon'
import Link from 'next/link'
import { useState } from 'react'
// import { FormAttributes } from '@/types/type'

const ReviewForm = () => {
  const { formValues } = useForm()
  const [isWhiteIconHovered, setIsWhiteIconHovered] = useState<boolean>(false)
  return (
    <div className="flex flex-col bg-white w-full rounded-3xl p-8 gap-6 font-poppins">
      <div className="flex font-semibold text-2xl ">
        <span>Profile</span>
        <div className="grow" />
        <div
          onMouseEnter={() => setIsWhiteIconHovered(true)}
          onMouseLeave={() => setIsWhiteIconHovered(false)}
          className="transition-transform duration-300 hover:scale-110"
        >
          <div>
            <div
              className={`transition-opacity duration-300 ease-linear ${
                isWhiteIconHovered ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <Icon path="/icon/edit.svg" size={32} />
            </div>
            <div
              className={`absolute top-0 left-0 transition-opacity duration-300 ease-linear ${
                isWhiteIconHovered ? 'opacity-100' : 'opacity-0'
              } `}
            >
              <Link href="/register/edit">
                <div className="flex justify-center  items-center bg-primary-500 hover:shadow-primary-500 rounded-full w-8 h-8 ">
                  <Icon path="/icon/pen_edit_white.svg" size={12} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full ">
        <div className="pb-8">
          <div className="text-sm text-grey-700">First name</div>
          <div className="w-full h-10">{formValues.firstname}</div>
        </div>

        <div className="pb-8">
          <div className="text-sm text-grey-700">Last name</div>
          <div className="w-full h-10">{formValues.lastname}</div>
        </div>

        <div className="pb-8">
          <div className="text-sm text-grey-700">Email</div>
          <div className="w-full h-10">{formValues.email}</div>
        </div>

        <div className="flex pb-8 gap-x-4 w-full">
          <div className="w-full">
            <label htmlFor="phone" className="text-sm text-grey-700">
              Phone number
            </label>
            <div className="w-full h-10">
              {formValues.countryCode} {formValues.phone}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end">
          {formValues.firstname !== '' &&
          formValues.lastname !== '' &&
          formValues.email !== '' &&
          formValues.phone !== '' &&
          formValues.countryCode !== '' ? (
            <NextBlackButton
              path={'/register/review'}
              formData={formValues}
              text="Confirm"
              width={154}
            />
          ) : (
            <NextGreyButton text="Confirm" />
          )}
        </div>
      </div>
    </div>
  )
}
export default ReviewForm
