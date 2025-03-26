import { useForm } from '@/provider/FormStateContext'
import { FormAttributes } from '@/types/type'
import Link from 'next/link'
import { useState } from 'react'

const SaveButton = ({
  path,
  formData,
  text,
  width,
}: {
  path: string
  formData: FormAttributes
  text: string
  width: number
}) => {
  const [isWhiteIconHovered, setIsWhiteIconHovered] = useState<boolean>(false)
  const { setFormValues, setIsHaveData } = useForm()
  return (
    <div
      onMouseEnter={() => setIsWhiteIconHovered(true)}
      onMouseLeave={() => setIsWhiteIconHovered(false)}
      className="transition-transform duration-300 hover:scale-100"
    >
      <div className="relative">
        <div
          className={`transition-opacity duration-300 ease-linear ${
            isWhiteIconHovered ? 'opacity-0' : 'opacity-100'
          }`}
        ></div>
        <Link
          href={path}
          onClick={() => {
            setIsHaveData(true)
            setFormValues(formData)
          }}
          className={`flex justify-center items-center h-12 border text-grey-sertis-800 border-grey-sertis-800 rounded-full gap-2.5 font-semibold text-lg`}
          style={{ width: width + 'px' }}
        >
          <span>{text}</span>
        </Link>
      </div>

      <div
        className={`absolute top-0 left-0 transition-opacity duration-300 ease-linear ${
          isWhiteIconHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link
          href={path}
          onClick={() => {
            setIsHaveData(true)
            setFormValues(formData)
          }}
          className={`flex justify-center items-center h-12 border border-primary-500 bg-primary-500 hover:shadow-primary-500 text-white rounded-full gap-2.5 font-semibold text-lg`}
          style={{ width: width + 'px' }}
        >
          <span>{text}</span>
        </Link>
      </div>
    </div>
  )
}
export default SaveButton
