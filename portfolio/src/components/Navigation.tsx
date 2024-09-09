// src/components/Navigation.tsx
export default function Navigation() {
    return (
      <nav className="bg-black text-white p-4">
        <ul className="flex justify-center space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    )
  }