import logo from '../../assets/images/logo_sinergia_2015_horizontal.png'
import {
  ADDRESS,
  HOURS_SATURDAY,
  HOURS_WEEKDAY,
  LEGAL_COMPANY,
  LEGAL_LICENSES,
  LEGAL_PHARMACIST,
  MAPS_EMBED_SRC,
} from '../constants'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white text-gray-700">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <img
            src={logo}
            alt="Sinergia Farmácia e Manipulação"
            className="h-14 w-auto mix-blend-multiply object-contain object-left"
          />
          <address className="mt-6 not-italic text-sm leading-relaxed text-gray-600">{ADDRESS}</address>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <div className="mb-4 text-center">
            <p className="font-medium text-sinergia">{HOURS_WEEKDAY}</p>
            <p className="mt-1 font-medium text-sinergia">{HOURS_SATURDAY}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <iframe
              title="Localização da Farmácia Sinergia"
              src={MAPS_EMBED_SRC}
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-6 space-y-3 text-xs leading-relaxed text-gray-500">
            <p>{LEGAL_COMPANY}</p>
            <p>{LEGAL_LICENSES}</p>
            <p>{LEGAL_PHARMACIST}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Farmácia Sinergia. Todos os direitos reservados.
      </div>
    </footer>
  )
}
