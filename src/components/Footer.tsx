function Footer() {
  return (
    <footer className="w-full bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer links */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Resources</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Legal</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">License</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-500 text-xs sm:text-sm">
            <p>&copy; {new Date().getFullYear()} Quartzle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
