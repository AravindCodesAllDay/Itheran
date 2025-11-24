// client/src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/auth/user_form"
import Navbar from "./components/navbar/navbar" // 👈 Import the Navbar
import AboutUs from "./pages/aboutus/aboutus"
import Services from "./pages/services/services"
import UseCases from "./pages/usecases/usecases"

// NOTE: You'll need to create placeholder components for all new routes (e.g., AboutUs, Services, etc.)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* 👈 Render the Navbar outside the Routes to display it on all pages */}
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />

       
         <Route path="/aboutus" element={<AboutUs />} />
         <Route path="/services" element={<Services />} /> 
        <Route path="/usecases" element={<UseCases />} />
        <Route path="/pricing" element={<div>Pricing Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)