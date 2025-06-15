import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md bg-[#202123]/60 shadow-md">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6 text-white">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo UberPet" className="w-8 h-8" />
          <span className="text-xl font-bold">UberPet</span>
        </div>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`flex-col md:flex md:flex-row md:items-center md:gap-6 bg-[#202123]/90 md:bg-transparent w-full md:w-auto absolute md:static top-full left-0 md:top-auto md:left-auto ${
            isOpen ? 'block' : 'hidden'
          } md:flex`}
        >
          <a
            href="#como-funciona"
            className="block px-4 py-2 text-sm hover:underline md:inline"
            onClick={() => setIsOpen(false)}
          >
            Como Funciona
          </a>
          <a
            href="#faq"
            className="block px-4 py-2 text-sm hover:underline md:inline"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#contato"
            className="block px-4 py-2 text-sm hover:underline md:inline"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
          <button
            className="block bg-white text-[#202123] rounded-xl px-4 py-1 font-medium hover:opacity-90 transition mx-4 my-2 md:my-0 md:inline"
            onClick={() => setIsOpen(false)}
          >
            Entrar
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar