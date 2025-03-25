import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins, Old_Standard_TT } from 'next/font/google'
import './globals.css'
import { FormStateContextProvider } from '@/provider/FormStateContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
})
const oldStandardTT = Old_Standard_TT({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-old-standard-tt',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <FormStateContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${oldStandardTT.variable} antialiased`}
        >
          {children}
        </body>
      </FormStateContextProvider>
    </html>
  )
}
