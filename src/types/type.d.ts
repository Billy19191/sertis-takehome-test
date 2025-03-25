export type CountryCode = {
  name: string
  dial_code: string
  code: string
}

export interface FormAttributes {
  id: string
  firstname: string
  lastname: string
  email: string
  countryCode: string
  phone: string
}
