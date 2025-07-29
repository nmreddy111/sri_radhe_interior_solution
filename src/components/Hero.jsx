import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in text-center lg:text-left">
            <div className="mb-4 lg:mb-6">
              <span className="inline-block bg-red-100 text-red-800 px-3 py-2 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium animate-pulse hover:animate-none hover:bg-red-200 transition-colors cursor-default">
                Premium Interior Design • Bangalore
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
              Sri Radhe
              <br />
              <span className="text-red-600">Interior Solutions</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 leading-relaxed px-4 lg:px-0">
              For whom Quality Really Matters. Transform your space with premium design, 
              luxury materials, and exceptional craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12 px-4 lg:px-0">
              <Link to="/portfolio" className="btn-primary text-center">
                View Our Work
              </Link>
              <a href="tel:+919154004300" className="btn-secondary text-center">
                Call +91 91540 04300
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-gray-200 mx-4 lg:mx-0">
              <div className="text-center lg:text-left p-3 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="text-xl lg:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">500+</div>
                <div className="text-xs lg:text-sm text-gray-600">Projects Done</div>
              </div>
              <div className="text-center lg:text-left p-3 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="text-xl lg:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">5.0★</div>
                <div className="text-xs lg:text-sm text-gray-600">Client Rating</div>
              </div>
              <div className="text-center lg:text-left p-3 rounded-lg hover:bg-red-50 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="text-xl lg:text-2xl font-bold text-red-600 hover:text-red-700 transition-colors">5+</div>
                <div className="text-xs lg:text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="fade-in lg:order-last mt-8 lg:mt-0">
            <div className="relative mx-4 lg:mx-0">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Interior Design" 
                className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-lg lg:text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Award Winning</div>
                    <div className="text-xs lg:text-sm text-gray-600">Design Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero