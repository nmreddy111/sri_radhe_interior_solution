# Sri Radhe Interior Solution Website

A modern, responsive static website for Sri Radhe Interior Solution - "For whom quality really matters."

## 🎨 Design Features

- **Theme Colors**: Red and white primary colors with light gray/black accents
- **Typography**: Poppins font for elegant, modern look
- **UI Style**: Clean, spacious layout with smooth transitions
- **Responsive**: Mobile-first design that works on all devices

## 📄 Pages

- **Homepage**: Hero section, services overview, portfolio highlights, testimonials, CTA
- **About Us**: Company story, mission, values, why choose us
- **Services**: Detailed service descriptions with features and process
- **Portfolio**: Filterable project gallery with categories
- **Contact**: Contact form, business info, map, FAQ

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment Ready**: Static build for AWS S3 + CloudFront

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx        # Hero section
│   ├── ServicesGrid.jsx # Services grid
│   └── PortfolioCard.jsx # Portfolio card
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── Portfolio.jsx   # Portfolio page
│   └── Contact.jsx     # Contact page
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎯 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Red theme colors
  },
  accent: {
    // Gray/black accent colors
  }
}
```

### Content
- Replace placeholder images with actual project photos
- Update contact information in Contact page
- Modify service descriptions and features
- Add real testimonials and client reviews

### Images
- Hero background: 1920x1080px
- Service images: 400x300px or 500x300px
- Portfolio images: 400x300px
- Company images: 600x400px

## 🌐 Deployment

### AWS S3 + CloudFront (Recommended)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder to S3 bucket**

3. **Configure CloudFront distribution**

4. **Set up custom domain (optional)**

### Alternative Deployments
- Netlify: Connect GitHub repo for auto-deployment
- Vercel: Import project and deploy
- GitHub Pages: Use GitHub Actions for deployment

## 📱 Features

- ✅ Fully responsive design
- ✅ SEO optimized with meta tags
- ✅ Fast loading with optimized assets
- ✅ Smooth animations and transitions
- ✅ Contact form with validation
- ✅ Portfolio filtering
- ✅ Mobile-friendly navigation
- ✅ Accessibility compliant

## 🔧 Development

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Update navigation in `Header.jsx`

### Adding New Components
1. Create component in `src/components/`
2. Import and use in pages
3. Follow existing styling patterns

### Styling Guidelines
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use theme colors from config

## 📞 Support

For questions or support, contact:
- Email: info@sriradheinterior.com
- Phone: +91 98765 43210

---

**Sri Radhe Interior Solution** - For whom quality really matters.