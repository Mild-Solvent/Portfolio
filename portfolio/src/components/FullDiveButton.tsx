// src/components/FullDiveButton.tsx
'use client'

import { useState } from 'react'

export default function FullDiveButton() {
  const [isFullDive, setIsFullDive] = useState(false)

  const handleFullDive = () => {
    setIsFullDive(!isFullDive)
    document.body.style.overflow = isFullDive ? 'auto' : 'hidden'
    // Add logic to zoom and fade away header and footer
    const header = document.querySelector('header')
    const footer = document.querySelector('footer')
    if (header && footer) {
      header.classList.toggle('fullDive')
      footer.classList.toggle('fullDive')
    }
  }

  return (
    <>
      <button
        className="fixed left-0 top-1/2 -translate-y-1/2 -rotate-90 bg-black bg-opacity-50 hover:bg-opacity-70 backdrop-filter backdrop-blur-lg text-white px-8 py-4 transform origin-left transition-all duration-300 hover:translate-x-2 hover:scale-110 w-64 rounded-r-full"
        onClick={handleFullDive}
      >
        Full dive
      </button>
      <button
        className="fixed right-0 top-1/2 -translate-y-1/2 rotate-90 bg-black bg-opacity-50 hover:bg-opacity-70 backdrop-filter backdrop-blur-lg text-white px-8 py-4 transform origin-right transition-all duration-300 hover:-translate-x-2 hover:scale-110 w-64 rounded-r-full"
        onClick={handleFullDive}
      >
        Full dive
      </button>
    </>
  )
}