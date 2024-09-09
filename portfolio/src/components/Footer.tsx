// src/components/Footer.tsx
"use client"; 

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiArtstation } from 'react-icons/si'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/user1' },
    { icon: FaFacebook, url: 'https://facebook.com/user1' },
    { icon: FaInstagram, url: 'https://instagram.com/user1' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/user1' },
    { icon: SiArtstation, url: 'https://artstation.com/user1' },
    { icon: FaTwitter, url: 'https://twitter.com/user2' },
    { icon: FaFacebook, url: 'https://facebook.com/user2' },
    { icon: FaInstagram, url: 'https://instagram.com/user2' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/user2' },
    { icon: SiArtstation, url: 'https://artstation.com/user2' },
  ]

  const controlFooter = () => {
    const currentScrollY = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false)
    } else if (currentScrollY < lastScrollY || currentScrollY + windowHeight >= documentHeight - 50) {
      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlFooter)
    return () => {
      window.removeEventListener('scroll', controlFooter)
    }
  }, [lastScrollY])

  return (
    <footer className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-8 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-400">
              <link.icon />
            </a>
          ))}
        </div>
        <div className="text-center">
          <p>Wheeeee &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}