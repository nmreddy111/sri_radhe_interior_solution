const Partners = () => {
  const partners = [
    { name: 'Asian Paints', logo: 'https://static.asianpaints.com/etc.clientlibs/apcolourcatalogue/clientlibs/clientlib-global-unification/resources/images/header/asian-paints-logo.webp' },
    { name: 'Godrej', logo: 'https://www.godrej.com/resources/logo.png' },
    { name: 'Kajaria', logo: 'https://www.kajariaceramics.com/assets/images/logo.png' },
    { name: 'Hafele', logo: 'https://www.hafele.com/INTERSHOP/static/WFS/Haefele-HAC-Site/-/Haefele-HAC/en_US/images/haefele_logo.png' },
    { name: 'Hindware', logo: 'https://hindware.com/wp-content/themes/hindware/assets/images/Logo.svg' },
    { name: 'Century Ply', logo: 'https://www.centuryply.com/img/logo-new.png' },
  ]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Partners</span>
          </h2>
          <p className="text-gray-600">Trusted brands we work with to deliver excellence</p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={`https://via.placeholder.com/150x60/f8f9fa/6c757d?text=${partner.name}`}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners