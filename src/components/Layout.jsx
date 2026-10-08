import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import WhatsAppButton from './WhatsAppButton'

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
        <WhatsAppButton iconOnly className="shadow-2xl" />
      </div>
    </div>
  )
}
