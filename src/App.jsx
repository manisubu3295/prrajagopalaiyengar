import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import StickyCallBar from './components/StickyCallBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/about"       element={<About />} />
          <Route path="/services"    element={<Services />} />
          <Route path="/products"    element={<Products />} />
          <Route path="/gallery"     element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact"     element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyCallBar />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
