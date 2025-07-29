import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-3 lg:py-4">
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm lg:text-lg">SR</span>
            </div>
            <div>
              <h1 className="text-sm lg:text-lg font-bold text-gray-900">Sri Radhe Interior Solutions</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Quality Really Matters</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <nav className="flex space-x-4 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium text-sm lg:text-base transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Get Free Quote Button - Desktop */}
            <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-semibold text-xs lg:text-sm transition-all duration-300 animate-bounce">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-gray-700"></span>
              <span className="block w-full h-0.5 bg-gray-700"></span>
              <span className="block w-full h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t z-50 animate-slide-down">
            <div className="py-6 bg-gradient-to-b from-white to-gray-50">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-4 px-6 font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    location.pathname === item.path
                      ? 'text-red-600 bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-600'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-red-50'
                  }`}
                  style={{animationDelay: `${index * 0.1}s`}}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Get Free Quote Button */}
              <div className="px-6 pt-6 border-t border-gray-200 mt-4">
                <Link 
                  to="/contact" 
                  className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ✨ Get Free Quote
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header