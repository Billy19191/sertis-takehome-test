'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.location.href = '/home'
  })
  return (
    <div className="flex justify-center items-center h-screen">
      Hello, please go to home page krub (/home)
    </div>
  )
}
