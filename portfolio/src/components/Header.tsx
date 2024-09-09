// src/components/Header.tsx
"use client";

import { useState, useRef, useEffect } from 'react'
import Navigation from './Navigation'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isNavOpen && navRef.current) {
      navRef.current.style.clipPath = 'circle(150% at top right)'
    } else if (navRef.current) {
      navRef.current.style.clipPath = 'circle(0% at top right)'
    }
  }, [isNavOpen])

  return (
    <header className="bg-black text-white p-4 transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center">
        <div className="w-1/3"></div>
        <div className="w-1/3 text-center">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>
        <div className="w-1/3 flex justify-end">
          <button
            className="p-2"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            Menu
          </button>
        </div>
      </div>
      <div ref={navRef} className="transition-all duration-500 ease-in-out">
        {isNavOpen && <Navigation />}
      </div>
    </header>
  )
}