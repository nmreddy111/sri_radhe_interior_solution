import { Link } from 'react-router-dom'

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href="tel:+919154004300" 
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-pulse"
      >
        <span>📞</span>
        <span className="font-medium">Call Now</span>
      </a>
    </div>
  )
}

export default FloatingCTA