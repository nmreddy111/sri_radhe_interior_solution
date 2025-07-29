import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Partners from '../components/Partners'
import PortfolioCard from '../components/PortfolioCard'
import { Link } from 'react-router-dom'

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: 'Modern Kitchen Makeover',
      description: 'Complete kitchen transformation with modular design and premium appliances.',
      category: 'Kitchen',
      location: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Luxury Bedroom Suite',
      description: 'Elegant bedroom design with custom furniture and ambient lighting.',
      category: 'Bedroom',
      location: 'Delhi',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Contemporary Living Space',
      description: 'Open-concept living room with modern furniture and artistic elements.',
      category: 'Living Room',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'Sri Radhe Interior Solution transformed our home beautifully. The attention to detail and quality is exceptional.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      text: 'Professional service and stunning results. Our office space looks amazing and productivity has increased.',
      rating: 5
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Pune',
      text: 'The team understood our vision perfectly and delivered beyond expectations. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Services Overview */}
      <ServicesGrid />
      
      {/* Portfolio Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-accent-600 max-w-2xl mx-auto">
              Discover some of our recent work and see how we transform spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-accent-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-accent-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-700"></div>
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl drop-shadow-sm">★</span>
                  ))}
                </div>
                <p className="text-accent-700 mb-8 italic text-lg leading-relaxed font-medium">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-accent-900 text-lg">{testimonial.name}</h4>
                    <p className="text-primary-600 font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse animation-delay-300"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            🏠 Ready to Transform Your Space?
          </h2>
          <p className="text-2xl text-primary-100 mb-6 font-medium">
            ✨ Limited Time Offer: FREE 3D Design + 20% Off ✨
          </p>
          <p className="text-xl text-primary-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ satisfied customers who trusted us with their dream homes. 
            Book your FREE consultation today and get exclusive discounts!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="tel:+919154004300" className="bg-white text-primary-700 hover:bg-accent-50 text-xl px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              📞 Call Now - FREE Quote
            </a>
            <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-700 text-xl px-10 py-5 rounded-2xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105">
              📝 Book Consultation
            </Link>
          </div>
          <p className="text-primary-200 mt-8 text-lg">
            ⏰ Offer valid till month end - Don't miss out!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home