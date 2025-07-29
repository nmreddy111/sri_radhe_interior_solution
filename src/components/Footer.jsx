import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.svg" alt="Sri Radhe Interior Solutions Logo" className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Sri Radhe Interior Solutions</h3>
                <p className="text-accent-200">For whom Quality Really Matters</p>
              </div>
            </div>
            <p className="text-accent-300 mb-4">
              Transform your space with our premium interior design services. 
              We specialize in creating beautiful, functional spaces that reflect your style and personality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-accent-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-accent-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-accent-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-accent-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-accent-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-accent-300">
              <p>📧 info@sriradheinterior.com</p>
              <p>📞 <a href="tel:+919154004300" className="hover:text-white transition-colors">+91 91540 04300</a></p>
              <p>📍 Bangalore, Karnataka - 560001</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-800 mt-8 pt-8 text-center text-accent-400">
          <p>&copy; 2024 Sri Radhe Interior Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer