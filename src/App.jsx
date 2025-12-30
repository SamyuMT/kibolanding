import React from 'react'
import './styles/global.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeatureSection from './components/FeatureSection'
import AppScreenSection from './components/AppScreenSection'
import VideoSection from './components/VideoSection'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <AppScreenSection />
      <VideoSection />
      <TeamSection />
      <Footer />
    </div>
  )
}

export default App
