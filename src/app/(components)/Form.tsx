'use client'
import { FC, useState, useRef, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CountryCode, FormAttributes } from '@/types/type'
import Icon from '@/common/Icon'
import NextGreyButton from './NextGreyButton'
import NextBlackButton from './NextBlackButton'

interface FormProps {
  data: CountryCode[]
}

const Form: FC<FormProps> = ({ data }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const { register, handleSubmit, watch, setValue, getValues } =
    useForm<FormAttributes>({
      defaultValues: {
        firstname: '',
        lastname: '',
        email: '',
        countryCode: '+66',
        phone: '',
      },
    })

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const formValues = watch()

  const onSubmit: SubmitHandler<FormAttributes> = (data) => {
    console.log(data)
  }

  const getInputClass = (id: keyof FormAttributes) => {
    const baseClass = 'w-full h-10 border-b border-black outline-0'
    return formValues[id]
      ? `${baseClass} text-black`
      : `${baseClass} text-grey-sertis-400`
  }

  return (
    <div className="flex flex-col bg-white w-full rounded-3xl p-8 gap-6 font-poppins">
      <div className="font-semibold text-2xl ">Profile</div>
      <form
        className="flex flex-col gap-4 w-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="pb-8">
          <label htmlFor="firstname" className="text-sm text-grey-700">
            First name
          </label>
          <input
            id="firstname"
            placeholder="Enter first name"
            className={getInputClass('firstname')}
            {...register('firstname', { required: true })}
          />
        </div>

        <div className="pb-8">
          <label htmlFor="lastname" className="text-sm text-grey-700">
            Last name
          </label>
          <input
            id="lastname"
            placeholder="Enter last name"
            className={getInputClass('lastname')}
            {...register('lastname', { required: true })}
          />
        </div>

        <div className="pb-8">
          <label htmlFor="email" className="text-sm text-grey-700">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter email"
            className={getInputClass('email')}
            {...register('email', {
              required: true,
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: 'Please enter a valid email',
              },
            })}
          />
        </div>

        <div className="flex pb-8 gap-x-4 w-full">
          <div className="w-40 relative" ref={dropdownRef}>
            <label htmlFor="countryCode" className="text-sm text-grey-700">
              Country code
            </label>
            <div
              className="flex items-center justify-between w-full h-10 border-b border-black outline-0 cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>{formValues.countryCode}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
            {dropdownOpen && (
              <div className="absolute z-10 w-[26.5rem] mt-1 bg-white shadow rounded-md max-h-60 overflow-y-scroll ">
                {data.map((item) => (
                  <div
                    key={item.code}
                    onClick={() => {
                      setValue('countryCode', item.dial_code, {
                        shouldValidate: true,
                      })
                      setDropdownOpen(false)
                    }}
                    className="px-2 py-2 cursor-pointer flex items-center gap-x-1"
                  >
                    {getValues('countryCode') === item.dial_code ? (
                      <Icon path="/icon/check_menu.svg" size={16} />
                    ) : (
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    )}
                    <div
                      className={`${
                        getValues('countryCode') === item.dial_code
                          ? 'text-primary-600'
                          : 'text-grey-sertis-700'
                      } flex font-medium  text-xs`}
                    >
                      {item.name} ({item.dial_code})
                    </div>
                  </div>
                ))}
              </div>
            )}
            <input type="hidden" {...register('countryCode')} />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-sm text-grey-700">
              Phone number
            </label>
            <input
              id="phone"
              placeholder="Enter phone number"
              className={getInputClass('phone')}
              {...register('phone', {
                required: true,
                pattern: {
                  value: /^[0-9]{9,10}$/,
                  message: 'Phone number should be 9-10 digits',
                },
              })}
            />
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
              text="Next"
              width={124}
            />
          ) : (
            <NextGreyButton text="Next" />
          )}
        </div>
      </form>
    </div>
  )
}

export default Form
