import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import StickyCallBar from './components/StickyCallBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ElectricalProducts from './pages/ElectricalProducts'
import PlumbingMaterials from './pages/PlumbingMaterials'
import PumpsMotors from './pages/PumpsMotors'
import BorewellServices from './pages/BorewellServices'
import Brands from './pages/Brands'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppContent() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-business" element={<About />} />
          <Route path="/electrical-products" element={<ElectricalProducts />} />
          <Route path="/plumbing-materials" element={<PlumbingMaterials />} />
          <Route path="/pumps-and-motors" element={<PumpsMotors />} />
          <Route path="/borewell-services" element={<BorewellServices />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Navigate to="/about-business" replace />} />
          <Route path="/services" element={<Navigate to="/borewell-services" replace />} />
          <Route path="/products" element={<Navigate to="/electrical-products" replace />} />
          <Route path="/gallery" element={<Navigate to="/brands" replace />} />
          <Route path="/testimonials" element={<Navigate to="/contact" replace />} />
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