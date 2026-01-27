import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
// import LogoSection from './components/LogoSection';
import HomeSections from './components/HomeSections';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Galaxy from './components/Galaxy';
import SplashCursor from './components/SplashCursor';
import StaggeredMenu from './components/StaggeredMenu';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
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
          density={1}
          glowIntensity={0.2}
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
          />
        </div>
      )}

      {/* Animations Toggle Button */}
      <button
        onClick={() => setAnimationsEnabled(!animationsEnabled)}
        className="fixed bottom-6 left-6 z-[200] px-4 py-2 bg-black/60 border border-gray-700 rounded-lg backdrop-blur-sm text-white text-sm font-medium hover:bg-black/80 hover:border-gray-600 transition-all duration-200 flex items-center gap-2 pointer-events-auto"
        aria-label="Toggle animations"
      >
        <svg 
          className={`w-4 h-4 transition-transform ${animationsEnabled ? 'opacity-100' : 'opacity-50'}`}
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
        <span>{animationsEnabled ? 'Animations ON' : 'Animations OFF'}</span>
      </button>

      {/* StaggeredMenu in top right corner */}
      <div className="fixed top-0 right-0 z-[200] pointer-events-none">
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
          logoUrl="/logo.svg"
          accentColor="#ff6b6b"
          isFixed={true}
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />
      </div>

      {/* Content on top */}
      <div className="relative z-[120] pointer-events-auto" style={{ overflow: 'visible' }}>
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

