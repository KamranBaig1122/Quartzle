import CardSwap, { Card } from './CardSwap';

function HeroSection() {
  return (
    <div className="w-full relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 overflow-visible">
      {/* Left side - Demo text content */}
      <div className="flex flex-col justify-center order-1 lg:order-1 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Building Digital Excellence
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6">
          Quartzle - Your Trusted Software Partner
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8">
          We craft innovative software solutions that drive business growth. 
          From applications to enterprise systems, we deliver quality code that scales with your vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-30">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm sm:text-base relative z-30 pointer-events-auto"
          >
            Get a Quote
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-200 text-sm sm:text-base relative z-30 pointer-events-auto"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Right side - Cards */}
      <div className="flex items-center justify-center overflow-visible relative w-full order-2 lg:order-2 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[400px] z-0 lg:z-auto mt-8 lg:mt-0">
        {/* Mobile/Tablet card container */}
        <div className="block lg:hidden w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] mx-auto">
          <div className="relative" style={{ paddingBottom: '80%' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <CardSwap
                cardDistance={30}
                verticalDistance={40}
                delay={5000}
                pauseOnHover={false}
                width="100%"
                height="100%"
              >
                <Card className="p-4 sm:p-6" style={{ width: '280px', height: '220px' }}>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black border border-gray-400 rounded text-xs">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="12" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
                      <circle cx="5" cy="8" r="1" fill="white" />
                      <circle cx="11" cy="8" r="1" fill="white" />
                    </svg>
                    <span className="text-white font-medium">Customizable</span>
                  </div>
                  <div className="flex flex-col h-full justify-center pt-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Tailored Solutions</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      We build software that adapts to your unique business needs. Every project is crafted with precision.
                    </p>
                  </div>
                </Card>
                <Card className="p-4 sm:p-6" style={{ width: '280px', height: '220px' }}>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black border border-gray-400 rounded text-xs">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <span className="text-white font-medium">Smooth</span>
                  </div>
                  <div className="flex flex-col h-full justify-center pt-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Seamless Experience</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      From concept to deployment, we ensure fluid workflows and intuitive interfaces.
                    </p>
                  </div>
                </Card>
                <Card className="p-4 sm:p-6" style={{ width: '280px', height: '220px' }}>
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black border border-gray-400 rounded text-xs">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4L6 2L10 2L12 4M4 12L6 14L10 14L12 12M4 4V12M12 4V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      <path d="M6 6H10M6 10H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-white font-medium">&lt;/&gt; Reliable</span>
                  </div>
                  <div className="flex flex-col h-full justify-center pt-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Enterprise-Grade</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      Built with best practices and robust architecture for scale and stability.
                    </p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        {/* Desktop card container */}
        <div className="hidden lg:flex items-center justify-center w-full h-full">
          <CardSwap
            cardDistance={35}
            verticalDistance={45}
            delay={5000}
            pauseOnHover={false}
            width={360}
            height={280}
          >
              <Card className="p-5" style={{ width: '360px', height: '280px' }}>
                <div className="absolute top-3 right-3 flex items-center gap-2 px-2.5 py-1 bg-black border border-gray-400 rounded">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="12" height="4" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
                    <circle cx="5" cy="8" r="1" fill="white" />
                    <circle cx="11" cy="8" r="1" fill="white" />
                  </svg>
                  <span className="text-white text-sm font-medium">Customizable</span>
                </div>
                <div className="flex flex-col h-full justify-center">
                  <h3 className="text-lg font-bold text-white mb-2">Tailored Solutions</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    We build software that adapts to your unique business needs. Every project is crafted with precision.
                  </p>
                </div>
              </Card>
              <Card className="p-5" style={{ width: '360px', height: '280px' }}>
                <div className="absolute top-3 right-3 flex items-center gap-2 px-2.5 py-1 bg-black border border-gray-400 rounded">
                  <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
                  <span className="text-white text-sm font-medium">Smooth</span>
                </div>
                <div className="flex flex-col h-full justify-center">
                  <h3 className="text-lg font-bold text-white mb-2">Seamless Experience</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    From concept to deployment, we ensure fluid workflows and intuitive interfaces.
                  </p>
                </div>
              </Card>
              <Card className="p-5" style={{ width: '360px', height: '280px' }}>
                <div className="absolute top-3 right-3 flex items-center gap-2 px-2.5 py-1 bg-black border border-gray-400 rounded">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4L6 2L10 2L12 4M4 12L6 14L10 14L12 12M4 4V12M12 4V12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M6 6H10M6 10H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-white text-sm font-medium">&lt;/&gt; Reliable</span>
                </div>
                <div className="flex flex-col h-full justify-center">
                  <h3 className="text-lg font-bold text-white mb-2">Enterprise-Grade</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Built with best practices and robust architecture for scale and stability.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>
      </div>
    </div>
  );
}

export default HeroSection;
