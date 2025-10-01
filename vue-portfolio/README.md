# Vue.js Portfolio - Denis Matejčík

A modern, cyberpunk-themed portfolio website built with Vue.js 3, TypeScript, and Vite. This is a complete rewrite of the original static HTML portfolio, featuring the same stunning design but with modern Vue.js architecture.

## 🚀 Features

### Design & UX
- **Cyberpunk/Futuristic Theme**: Neon colors, glass morphism effects, and animated backgrounds
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Accessibility Focused**: Screen reader support, keyboard navigation, and WCAG compliance
- **Performance Optimized**: Lazy loading, code splitting, and reduced motion support

### Technical Features
- **Vue.js 3** with Composition API
- **TypeScript** for type safety
- **Vue Router** for client-side routing
- **Vite** for fast development and building
- **GitHub Pages** ready deployment
- **SEO Optimized** with structured data and meta tags

### Interactive Effects
- **Particle System**: Animated background particles with mouse trail effects
- **Glass Morphism**: Modern glassmorphism UI components
- **Parallax Effects**: Smooth scrolling animations
- **Hover Animations**: Project cards with image transitions
- **Cookie Consent**: GDPR-compliant cookie notice

## 🛠 Technology Stack

- **Frontend**: Vue.js 3, TypeScript, HTML5, CSS3
- **Build Tool**: Vite
- **Routing**: Vue Router
- **Styling**: Custom CSS with CSS Variables
- **Fonts**: Google Fonts (Inter, Orbitron, JetBrains Mono)
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```sh
# Install dependencies
npm install
```

### Development

```sh
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```sh
# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Type Checking & Linting

```sh
# Run TypeScript type checking
npm run type-check

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 🌐 Deployment

### GitHub Pages (Automatic)

1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Push to main branch** - GitHub Actions will automatically deploy

### Manual Deployment

Build the project and deploy the `dist` folder to your hosting service:

```sh
npm run build
# Deploy contents of 'dist' folder
```

## 🎨 Customization

### Theme Colors
Edit `src/assets/styles/main.css`:

```css
:root {
  --neon-blue: #00d9ff;
  --neon-purple: #bd00ff;
  --neon-pink: #ff0080;
  /* ... customize colors */
}
```

### Content
- **Projects**: Update `src/components/sections/*.vue`
- **Contact Info**: Modify `src/components/AppFooter.vue`
- **Images**: Replace files in `public/images/`

## 📞 Contact

**Denis Matejčík**
- Email: matejcik.denis@gmail.com
- GitHub: [@Mild-Solvent](https://github.com/Mild-Solvent)
- LinkedIn: [Denis Matejčík](https://www.linkedin.com/in/denis-matejcik/)

---

⚡ **Built with Vue.js and powered by caffeine** ☕
