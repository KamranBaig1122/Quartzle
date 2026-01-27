import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const floatTextRef = useRef<HTMLDivElement>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const floatText = floatTextRef.current;
    const footerContent = footerContentRef.current;
    
    if (!footer || !floatText || !footerContent) return;

    // Split text into characters for animation
    const textChars = floatText.querySelectorAll('.char');
    
    if (textChars.length === 0) return;

    // Set initial states - footer content visible immediately
    gsap.set(footerContent, {
      opacity: 1,
      y: 0
    });
    
    // Text starts below the footer
    gsap.set(floatText, { 
      y: '50vh', // Start below viewport
      opacity: 0
    });
    
    gsap.set(textChars, {
      opacity: 0,
      yPercent: 150,
      scaleY: 2.5,
      scaleX: 0.6,
      transformOrigin: '50% 0%',
      willChange: 'opacity, transform'
    });

    // Create main scroll trigger for footer pinning - independent from text animation
    const pinTrigger = ScrollTrigger.create({
      trigger: footer,
      start: 'top top',
      end: '+=300%',
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      pinReparent: true
    });

    // Animate floating text container smoothly upward - independent trigger
    const textContainerAnimation = gsap.to(floatText, {
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: footer,
        start: 'top top+=50%', // Start animation after footer is pinned
        end: '+=250%',
        scrub: 1.5, // Smooth scrubbing
      }
    });

    // Animate individual characters with stagger - independent trigger
    const charAnimation = gsap.to(textChars, {
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      ease: 'back.out(1.7)',
      stagger: {
        amount: 0.8,
        from: 'start'
      },
      scrollTrigger: {
        trigger: footer,
        start: 'top top+=50%', // Start after footer content is visible
        end: '+=250%',
        scrub: 1.2, // Slightly faster scrub for character animation
      }
    });

    return () => {
      pinTrigger.kill();
      textContainerAnimation.kill();
      charAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === footer) {
          trigger.kill();
        }
      });
    };
  }, []);

  // Split text for animation
  const splitText = 'Quartzle'.split('').map((char, index) => (
    <span className="char inline-block" key={index}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <>
      {/* Footer - will be pinned */}
      <footer ref={footerRef} className="w-full py-20 px-4 sm:px-6 lg:px-8 relative bg-black/80 backdrop-blur-md overflow-visible -mt-16 sm:-mt-20 lg:-mt-24 min-h-[80vh]">
        <div ref={footerContentRef} className="max-w-7xl mx-auto relative z-10">
          {/* Footer content */}
          <div className="pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Quartzle. All rights reserved.</p>
          </div>
        </div>
        </div>

        {/* Floating text - positioned below footer content */}
        <div 
          ref={floatTextRef}
          className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none z-[1] pb-8 sm:pb-12 lg:pb-16"
          style={{ 
            transform: 'translateY(50vh)',
            opacity: 0
          }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white/20 sm:text-white/30 overflow-hidden select-none">
            {splitText}
          </h2>
        </div>
      </footer>
    </>
  );
}

export default Footer;

