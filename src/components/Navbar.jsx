import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo_sinergia_2015_horizontal.png'
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '../constants'
import { InstagramIcon, PhoneIcon } from './SocialLinks'
import { WhatsAppIcon } from './WhatsAppButton'

const links = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre nós' },
  { to: '/contato', label: 'Contato' },
]

function linkClass({ isActive }) {
  return [
    'block rounded-full px-4 py-2 text-base font-medium transition-all duration-300',
    isActive
      ? 'bg-sinergia text-white shadow-sm'
      : 'text-gray-700 hover:bg-sinergia-light hover:text-sinergia',
  ].join(' ')
}

function ContactRow({ className = '' }) {
  return (
    <div className={['flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-sinergia', className].join(' ')}>
      <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 hover:underline">
        <PhoneIcon className="h-4 w-4" />
        {PHONE_DISPLAY}
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 hover:underline"
      >
        <WhatsAppIcon className="h-4 w-4" />
        {WHATSAPP_DISPLAY}
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-sinergia/20 hover:bg-sinergia hover:text-white"
        aria-label="Instagram da Sinergia"
      >
        <InstagramIcon />
      </a>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5">
        <NavLink to="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
          <img
            src={logo}
            alt="Sinergia Farmácia e Manipulação"
            className="h-11 w-auto mix-blend-multiply object-contain object-left md:h-14"
          />
        </NavLink>

        <button
          type="button"
          className="rounded-md p-2 text-sinergia lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          <span className="mt-1.5 block h-0.5 w-5 bg-current" />
        </button>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <ContactRow />
        </div>
      </nav>

      {open && (
        <div className="space-y-3 border-t border-gray-100 px-4 py-3 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <ContactRow className="pt-1" />
        </div>
      )}
    </header>
  )
}
