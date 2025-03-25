'use client'
import { FormAttributes } from '@/types/type'
import { createContext, FC, useContext, useState } from 'react'

interface FormContextProps {
  formValues: FormAttributes
  setFormValues: React.Dispatch<React.SetStateAction<FormAttributes>>
  isHaveData: boolean
  setIsHaveData: React.Dispatch<React.SetStateAction<boolean>>
}

const FormContext = createContext<FormContextProps>({
  formValues: {
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    countryCode: '',
    phone: '',
  },
  setFormValues: () => {},
  isHaveData: false,
  setIsHaveData: () => {},
})

const FormStateContextProvider: FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [formValues, setFormValues] = useState<FormAttributes>({
    id: '',
    firstname: '',
    lastname: '',
    email: '',
    countryCode: '',
    phone: '',
  })
  const [isHaveData, setIsHaveData] = useState<boolean>(false)
  return (
    <FormContext.Provider
      value={{ formValues, setFormValues, isHaveData, setIsHaveData }}
    >
      {children}
    </FormContext.Provider>
  )
}

const useForm = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormStateContext')
  }
  return context
}

export { FormStateContextProvider, useForm }
