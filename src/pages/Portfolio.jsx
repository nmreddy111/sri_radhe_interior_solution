import { useState } from 'react'
import PortfolioCard from '../components/PortfolioCard'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Makeover',
      description: 'Complete kitchen transformation with modular design and premium appliances.',
      category: 'Kitchen',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      title: 'Luxury Bedroom Suite',
      description: 'Elegant bedroom design with custom furniture and ambient lighting.',
      category: 'Bedroom',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      title: 'Contemporary Living Space',
      description: 'Open-concept living room with modern furniture and artistic elements.',
      category: 'Living Room',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      title: 'Executive Office Design',
      description: 'Professional workspace with ergonomic furniture and sophisticated design.',
      category: 'Office',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 5,
      title: 'Complete Home Renovation',
      description: 'Full home transformation with cohesive design throughout all spaces.',
      category: 'Full Home',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 6,
      title: 'Spa-Style Bathroom',
      description: 'Luxurious bathroom design with modern fixtures and premium finishes.',
      category: 'Bathroom',
      location: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const categories = ['All', 'Kitchen', 'Bedroom', 'Living Room', 'Office', 'Full Home', 'Bathroom']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of stunning interior design projects in Bangalore
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <PortfolioCard 
                key={project.id} 
                project={project}
                onClick={(project) => {
                  console.log('Project clicked:', project)
                }}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">450+</div>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Dream Space?
          </h2>
          <p className="text-lg text-red-100 mb-8">
            Let's bring your vision to life with our expert design team
          </p>
          <a href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Portfolio