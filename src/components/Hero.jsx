import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                Premium Interior Design • Bangalore
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sri Radhe
              <br />
              <span className="text-red-600">Interior Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For whom Quality Really Matters. Transform your space with premium design, 
              luxury materials, and exceptional craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/portfolio" className="btn-primary">
                View Our Work
              </Link>
              <a href="tel:+919154004300" className="btn-secondary">
                Call +91 91540 04300
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">5.0★</div>
                <div className="text-sm text-gray-600">Client Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="fade-in lg:order-last">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Interior Design" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xl">🏆</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Design Excellence</div>
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