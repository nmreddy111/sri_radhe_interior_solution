import { Link } from 'react-router-dom'

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: 'Modular Kitchen',
      description: 'Smart, functional kitchens with premium materials and modern appliances.',
      icon: '🍳',
      price: 'From ₹2.5L',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Bedroom Design',
      description: 'Comfortable, stylish bedrooms that create the perfect sanctuary.',
      icon: '🛏️',
      price: 'From ₹1.8L',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Living Room',
      description: 'Elegant spaces that blend comfort with sophisticated design.',
      icon: '🛋️',
      price: 'From ₹3.2L',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Office Interiors',
      description: 'Professional workspaces that boost productivity and inspire.',
      icon: '💼',
      price: 'From ₹4.5L',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      title: 'Full Home Design',
      description: 'Complete transformation with cohesive design throughout.',
      icon: '🏠',
      price: 'From ₹8L',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      title: 'Bathroom Design',
      description: 'Luxurious bathrooms with modern fixtures and premium finishes.',
      icon: '🚿',
      price: 'From ₹1.2L',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive interior design solutions for every space in your home or office
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              {/* Image */}
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-red-600 font-semibold text-sm">{service.price}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                >
                  Get Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid