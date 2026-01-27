// @ts-ignore
import TiltedCard from './TiltedCard';
import LogoSection from './LogoSection';

function HomeSections() {
  return (
    <div className="w-full space-y-16 sm:space-y-24 lg:space-y-32 py-12 sm:py-16 lg:py-24 xl:py-32 mb-8 sm:mb-12 lg:mb-16">
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc= "/Service-web.jpg"
              altText="Web Application Development"
              captionText="Web Application Development"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Web Application Development</h3>
                  <p className="text-gray-200 text-sm">Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc="/Service-AI.jpg"
              altText="AI Solutions"
              captionText="AI Solutions"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
                  <p className="text-gray-200 text-sm">Intelligent automation and machine learning solutions that transform your business operations and drive innovation.</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc="/Service-saas.jpg"
              altText="SaaS Production"
              captionText="SaaS Production"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">SaaS Production</h3>
                  <p className="text-gray-200 text-sm">Scalable Software-as-a-Service platforms designed for growth, reliability, and seamless user experience.</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc="/Service-ui.jpg"
              altText="UI/UX Design"
              captionText="UI/UX Design"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">UI/UX Design</h3>
                  <p className="text-gray-200 text-sm">User-centered design solutions that create intuitive, beautiful interfaces and exceptional user experiences.</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc="/Service-mobile.jpg"
              altText="Mobile Application Development"
              captionText="Mobile Application Development"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Mobile Application Development</h3>
                  <p className="text-gray-200 text-sm">Native and cross-platform mobile apps delivering seamless experiences on iOS and Android devices.</p>
                </div>
              }
            />
          </div>
          <div className="flex flex-col items-center">
            <TiltedCard
              imageSrc="/Service-cloud.jpg"
              altText="Cloud Infrastructure"
              captionText="Cloud Infrastructure"
              containerHeight="300px"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Infrastructure</h3>
                  <p className="text-gray-200 text-sm">Secure, scalable cloud solutions and DevOps services to modernize your infrastructure and optimize performance.</p>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Quartzle
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto">
            Your trusted partner in digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <div className="absolute -left-2 sm:-left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed pl-4 sm:pl-6">
                Quartzle is a leading software house dedicated to crafting innovative solutions that drive business growth. 
                With years of experience in the industry, we combine technical expertise with creative problem-solving 
                to deliver exceptional results.
              </p>
            </div>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
              Our team of skilled developers, designers, and consultants work collaboratively to transform your ideas 
              into powerful digital products. We pride ourselves on delivering quality code, intuitive designs, and 
              reliable systems that exceed expectations.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 pt-2 sm:pt-4">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-white backdrop-blur-sm">
                Innovation
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-white backdrop-blur-sm">
                Excellence
              </span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-white backdrop-blur-sm">
                Reliability
              </span>
              {/* <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs sm:text-sm text-white backdrop-blur-sm">
                Quality
              </span> */}
            </div>
          </div>

          {/* Right side - Stats with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
            <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">100+</div>
              <div className="text-sm sm:text-base text-gray-400 font-medium">Projects Completed</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Successfully delivered</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">50+</div>
              <div className="text-sm sm:text-base text-gray-400 font-medium">Happy Clients</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Trusted partnerships</div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2 sm:mb-3">5+</div>
              <div className="text-sm sm:text-base text-gray-400 font-medium">Years Experience</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500">Industry expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Technology Stack
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            Modern tools and frameworks we work with
          </p>
        </div>
        <LogoSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Why Choose Quartzle
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            What sets us apart from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                Expert Team
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our team consists of experienced developers and designers who stay updated with the latest technologies and best practices.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                Agile Methodology
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We follow agile development practices ensuring transparency, flexibility, and continuous delivery throughout the project lifecycle.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 sm:col-span-2 lg:col-span-1">
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                24/7 Support
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We provide round-the-clock support to ensure your systems run smoothly and any issues are resolved promptly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            How we bring your vision to life
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-700/30 via-gray-600/30 to-gray-700/30"></div>
          
          <div className="space-y-6 sm:space-y-8">
            <div className="group relative flex gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white shadow-lg group-hover:border-purple-500/50 group-hover:scale-105 transition-all duration-300">
                  1
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1 pt-0 sm:pt-2">
                <div className="bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Discovery & Planning
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    We start by understanding your business needs, goals, and requirements to create a comprehensive project plan.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative flex gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white shadow-lg group-hover:border-purple-500/50 group-hover:scale-105 transition-all duration-300">
                  2
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1 pt-0 sm:pt-2">
                <div className="bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Design & Prototyping
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Our design team creates wireframes and prototypes to visualize the final product before development begins.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative flex gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white shadow-lg group-hover:border-purple-500/50 group-hover:scale-105 transition-all duration-300">
                  3
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1 pt-0 sm:pt-2">
                <div className="bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Development
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    We build your solution using best practices, clean code, and modern technologies with regular updates and feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative flex gap-4 sm:gap-6 md:gap-8 items-start">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl md:text-2xl text-white shadow-lg group-hover:border-purple-500/50 group-hover:scale-105 transition-all duration-300">
                  4
                </div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl sm:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex-1 pt-0 sm:pt-2">
                <div className="bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                      Testing & Deployment
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Rigorous testing ensures quality, followed by smooth deployment and ongoing maintenance support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-base sm:text-lg font-medium text-gray-400 mb-3 sm:mb-4">
              40+ satisfied clients trust Quartzle
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Our happy clients say about us
            </h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto px-2">
              These are three of the best compliments we've received from our valued clients
            </p>
          </div>

          <div className="mt-6 sm:mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              className="pb-2 text-sm sm:text-base font-bold leading-7 text-white transition-all duration-200 border-b-2 border-purple-500 hover:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:ring-offset-2 hover:text-purple-400"
            >
              View all testimonials
            </a>
          </div>

          <div className="relative mt-8 sm:mt-10 md:mt-24 md:order-2 w-full">
            <div className="absolute -inset-x-1 inset-y-12 sm:inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl opacity-20 sm:opacity-30 blur-lg filter"
                style={{
                  background:
                    'linear-gradient(90deg,rgb(45, 95, 68) -0.55%,rgb(36, 72, 97) 22.86%,rgb(54, 35, 83) 48.36%,rgb(80, 42, 33) 73.33%,rgb(87, 94, 47) 99.34%)'
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-4 sm:gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="flex flex-col overflow-hidden shadow-xl rounded-xl">
                <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl lg:py-8 lg:px-7 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-6 sm:mt-8">
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                        "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-6 sm:mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11 border-2 border-purple-500/30"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt="Leslie Alexander"
                    />
                    <div className="ml-3 sm:ml-4">
                      <p className="text-sm sm:text-base font-bold text-white">Leslie Alexander</p>
                      <p className="mt-0.5 text-xs sm:text-sm text-gray-400">Freelance React Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col overflow-hidden shadow-xl rounded-xl">
                <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl lg:py-8 lg:px-7 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-6 sm:mt-8">
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                        "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users."
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-6 sm:mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11 border-2 border-purple-500/30"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                      alt="Jacob Jones"
                    />
                    <div className="ml-3 sm:ml-4">
                      <p className="text-sm sm:text-base font-bold text-white">Jacob Jones</p>
                      <p className="mt-0.5 text-xs sm:text-sm text-gray-400">Digital Marketer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col overflow-hidden shadow-xl rounded-xl">
                <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 rounded-xl lg:py-8 lg:px-7 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-6 sm:mt-8">
                      <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200">
                        "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-6 sm:mt-8">
                    <img
                      className="flex-shrink-0 object-cover rounded-full w-10 h-10 sm:w-11 sm:h-11 border-2 border-purple-500/30"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                      alt="Jenny Wilson"
                    />
                    <div className="ml-3 sm:ml-4">
                      <p className="text-sm sm:text-base font-bold text-white">Jenny Wilson</p>
                      <p className="mt-0.5 text-xs sm:text-sm text-gray-400">Graphic Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 lg:-mt-16 mb-0">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-black/80 to-black/60 border border-gray-700 backdrop-blur-sm">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 opacity-50"></div>
          <div className="absolute -inset-4 sm:-inset-10 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Let's build something amazing together. Get in touch with our team and discover how Quartzle can help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-12">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-sm sm:text-base md:text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
                >
                  Get Started Today
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-200 text-sm sm:text-base md:text-lg backdrop-blur-sm"
                >
                  Schedule a Consultation
                </a>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>No Commitment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeSections;
