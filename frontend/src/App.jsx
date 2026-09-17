import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import HowItWorks from './pages/HowItWorks'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import MindSyncApp from './pages/MindSyncApp'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/about"        element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/features"     element={<Features />} />
          <Route path="/pricing"      element={<Pricing />} />
          <Route path="/app"          element={<MindSyncApp />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/login"        element={<Login />} />
          <Route path="/signup"       element={<Signup />} />
          <Route path="*"             element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
