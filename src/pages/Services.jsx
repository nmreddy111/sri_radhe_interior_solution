import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Modular Kitchen',
      description: 'Transform your kitchen into a modern culinary haven with smart storage solutions and premium appliances.',
      features: ['Custom Cabinets', 'Premium Countertops', 'Smart Storage', 'Modern Appliances'],
      price: 'From ₹2.5L',
      icon: '🍳',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Bedroom Design',
      description: 'Create your perfect sanctuary with custom wardrobes, ambient lighting, and comfortable furniture.',
      features: ['Custom Wardrobes', 'Ambient Lighting', 'Comfortable Furniture', 'Storage Solutions'],
      price: 'From ₹1.8L',
      icon: '🛏️',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Living Room',
      description: 'Design elegant living spaces that blend comfort with style for entertainment and relaxation.',
      features: ['Seating Arrangements', 'Entertainment Units', 'Lighting Design', 'Decor Elements'],
      price: 'From ₹3.2L',
      icon: '🛋️',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: 'Office Interiors',
      description: 'Professional workspaces that enhance productivity, collaboration, and employee satisfaction.',
      features: ['Ergonomic Furniture', 'Meeting Rooms', 'Reception Areas', 'Collaborative Spaces'],
      price: 'From ₹4.5L',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Full Home Design',
      description: 'Complete home transformation with cohesive design throughout your entire living space.',
      features: ['Complete Planning', 'Cohesive Design', 'Project Management', 'Quality Assurance'],
      price: 'From ₹8L',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Bathroom Design',
      description: 'Luxurious bathrooms with modern fixtures, premium finishes, and smart layouts.',
      features: ['Modern Fixtures', 'Premium Tiles', 'Smart Layouts', 'Luxury Finishes'],
      price: 'From ₹1.2L',
      icon: '🚿',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Services</span>
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive interior design solutions for every space in your home or office
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <span className="text-3xl mr-4">{service.icon}</span>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                        <span className="text-red-600 font-semibold">{service.price}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <span className="text-red-600 mr-2">✓</span>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/contact" className="btn-primary">
                      Get Free Quote
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div className={`h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600">
              Our proven 4-step process ensures exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'Understanding your needs and budget requirements' },
              { step: '2', title: 'Design', desc: 'Creating detailed designs and 3D visualizations' },
              { step: '3', title: 'Execution', desc: 'Managing the project from sourcing to installation' },
              { step: '4', title: 'Delivery', desc: 'Final handover with quality assurance' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Contact us today for a free consultation and let's discuss your project
          </p>
          <Link to="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services