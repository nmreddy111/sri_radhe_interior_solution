const PortfolioCard = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={() => onClick && onClick(project)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/20 transition-all duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-accent-600 mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-accent-500">{project.location}</span>
          <span className="text-primary-600 font-medium">View Details →</span>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard