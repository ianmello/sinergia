import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from '../constants'
import { WhatsAppIcon } from './WhatsAppButton'

export function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  )
}

export function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.02l-2.2 2.21Z" />
    </svg>
  )
}

const iconClass =
  'inline-flex h-10 w-10 items-center justify-center rounded-full text-sinergia ring-1 ring-sinergia/20 transition-all duration-300 hover:bg-sinergia hover:text-white hover:ring-sinergia'

export default function SocialLinks({ className = '' }) {
  return (
    <div className={['flex flex-col items-start gap-3', className].join(' ')}>
      <div className="flex items-center gap-2.5">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="Instagram da Sinergia"
        >
          <InstagramIcon />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label="WhatsApp da Sinergia"
        >
          <WhatsAppIcon className="h-5 w-5" />
        </a>
      </div>
      <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-sinergia hover:underline">
        <span className={iconClass}>
          <PhoneIcon />
        </span>
        {PHONE_DISPLAY}
      </a>
    </div>
  )
}
