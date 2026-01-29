import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
// import LogoSection from './components/LogoSection';
import HomeSections from './components/HomeSections';
import ContactPage from './components/ContactPage';
import PortfolioPage from './components/PortfolioPage';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy';
import SplashCursor from './components/SplashCursor';
import StaggeredMenu from './components/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/#services' },
  { label: 'Portfolio', ariaLabel: 'View our work', link: '/portfolio' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

function AppContent() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Galaxy background covering entire screen */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.5}
          glowIntensity={0.1}
          saturation={0}
          hueShift={140}
          disableAnimation={!animationsEnabled}
        />
      </div>

      {/* SplashCursor fluid effect - above Galaxy, below content */}
      {animationsEnabled && (
        <div className="fixed inset-0 w-full h-full z-[5] pointer-events-none" style={{ pointerEvents: 'none' }}>
          <SplashCursor
            TRANSPARENT={true}
            SHADING={true}
            SPLAT_RADIUS={0.1}
            SPLAT_FORCE={3000}
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2.5}
            COLOR_INTENSITY={0.05}
            COLOR_PALETTE={[
              { r: 0.69, g: 0.62, b: 0.94 },  // Light purple #B19EEF
              { r: 0.32, g: 0.15, b: 1.0 },   // Deep violet #5227FF
              { r: 0.5, g: 0.4, b: 0.8 },     // Mid purple
              { r: 0.4, g: 0.3, b: 0.7 },     // Muted purple
            ]}
          />
        </div>
      )}

      {/* Animations Toggle Button */}
      <button
        onClick={() => setAnimationsEnabled(!animationsEnabled)}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[200] px-3 py-1.5 sm:px-4 sm:py-2 bg-black/60 border border-gray-700 rounded-lg backdrop-blur-sm text-white text-xs sm:text-sm font-medium hover:bg-black/80 hover:border-gray-600 transition-all duration-200 flex items-center gap-1.5 sm:gap-2 pointer-events-auto"
        aria-label="Toggle animations"
      >
        <svg 
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${animationsEnabled ? 'opacity-100' : 'opacity-50'}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {animationsEnabled ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>
        <span className="hidden sm:inline">{animationsEnabled ? 'Animations ON' : 'Animations OFF'}</span>
        <span className="sm:hidden">{animationsEnabled ? 'ON' : 'OFF'}</span>
      </button>

      {/* StaggeredMenu - handles its own fixed positioning */}
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['#B19EEF', '#5227FF']}
        logoText="Quartzle LTD"
        accentColor="#B19EEF"
        isFixed={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />

      {/* Content on top */}
      <div className="relative z-10">
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <HomeSections />
                </>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </Layout>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;

