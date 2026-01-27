import CardSwap, { Card } from './CardSwap';

function HeroSection() {
  return (
    <div className="w-full h-full relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
      {/* Left side - Demo text content */}
      <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-8 order-1 lg:order-1 relative z-10 mb-12 sm:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Building Digital Excellence
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8">
          Quartzle - Your Trusted Software Partner
        </p>
        <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8">
          We craft innovative software solutions that drive business growth. 
          From applications to enterprise systems, we deliver quality code that scales with your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 relative z-30 mb-4 sm:mb-0">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 text-base sm:text-lg relative z-30 pointer-events-auto"
          >
            Get a Quote
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-base sm:text-lg relative z-30 pointer-events-auto"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right side - Cards */}
      <div className="flex items-center justify-center px-2 sm:px-4 lg:px-8 overflow-visible relative w-full h-full order-2 lg:order-2 min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] z-0 lg:z-auto mt-4 sm:-mt-8 lg:mt-0">
        <div className="relative w-full max-w-[280px] h-[220px] sm:max-w-[350px] sm:h-[280px] lg:max-w-[420px] lg:h-[340px] flex items-center justify-center mx-auto" style={{ zIndex: 1 }}>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full mx-auto card-swap-mobile-center">
              <div className="w-full h-full scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-center">
                <CardSwap
                  cardDistance={50}
                  verticalDistance={60}
                  delay={5000}
                  pauseOnHover={false}
                  width={420}
                  height={340}
                >
                  <Card className="p-8" style={{ width: '100%', height: '100%' }}>
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black border border-gray-400 rounded">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="6" width="12" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
                        <circle cx="5" cy="8" r="1" fill="white" />
                        <circle cx="11" cy="8" r="1" fill="white" />
                      </svg>
                      <span className="text-white text-sm font-medium">Customizable</span>
                    </div>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">Tailored Solutions</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        We build software that adapts to your unique business needs. Every project is crafted with precision, ensuring your vision becomes reality.
                      </p>
                    </div>
                  </Card>
                  <Card className="p-8" style={{ width: '100%', height: '100%' }}>
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black border border-gray-400 rounded">
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                      <span className="text-white text-sm font-medium">Smooth</span>
                    </div>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">Seamless Experience</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        From concept to deployment, we ensure fluid workflows and intuitive interfaces. Your users will love the experience we create.
                      </p>
                    </div>
                  </Card>
                  <Card className="p-8" style={{ width: '100%', height: '100%' }}>
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black border border-gray-400 rounded">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L6 2L10 2L12 4M4 12L6 14L10 14L12 12M4 4V12M12 4V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                        <path d="M6 6H10M6 10H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-white text-sm font-medium">&lt;/&gt; Reliable</span>
                    </div>
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">Enterprise-Grade</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Built with best practices and robust architecture. Your software will scale, perform, and remain stable under any load.
                      </p>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

