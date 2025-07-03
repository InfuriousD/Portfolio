import { useState, useEffect } from 'react'

export default function Navbar() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <nav className="w-full flex justify-between items-center p-4 fixed top-0 left-0 bg-white dark:bg-gray-900 z-50 shadow">
      <div className="text-xl font-bold text-gray-900 dark:text-white">Mayank</div>
      <ul className="flex gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
        <li><a href="#about" className="hover:text-orange-500">About</a></li>
        <li><a href="#skills" className="hover:text-orange-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
      </ul>
      <button onClick={() => setDark(!dark)} className="ml-4 p-2 border rounded dark:text-white">
        {dark ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}
