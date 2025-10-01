# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static HTML portfolio website for Denis Matejčík, a Full Stack Developer. The site features a cyberpunk/futuristic design aesthetic with glass morphism effects, neon colors, animated backgrounds, and interactive elements. It showcases web development, game development, mobile app development, DevOps, and cybersecurity projects.

## Architecture & Structure

### Core Files
- `index.html` - Main portfolio page with all project sections
- `contact.html` - Contact page with social links and contact form
- `coffee.html` - "Buy Me a Coffee" donation page with multiple payment methods
- `privacy.html` - Privacy policy page
- `terms.html` - Terms of service page

### Asset Organization
- `css/main.css` - Main stylesheet with cyberpunk theme, glass morphism effects, and animations
- `css/coffee.css` - Dedicated styles for the coffee donation page
- `js/main.js` - Interactive features (particles, carousels, smooth scrolling, parallax effects)
- `js/coffee.js` - Coffee page functionality
- `images/` - Screenshots of projects, game development assets, mobile app mockups

### Design System
The site uses a consistent cyberpunk color palette defined in CSS custom properties:
- Neon colors: `--neon-blue`, `--neon-purple`, `--neon-pink`, `--neon-green`, `--neon-cyan`
- Glass morphism effects with backdrop blur and transparency
- Animated gradient backgrounds with parallax scrolling
- Interactive particle systems and mouse trail effects

## Common Development Tasks

### Local Development
Since this is a static HTML site, simply open files in a browser:
```bash
# Open the main page
open index.html

# Or serve locally with Python
python -m http.server 8000
# Then visit http://localhost:8000
```

### Preview Changes
```bash
# View the site locally
python -m http.server 8000 &
open http://localhost:8000

# Kill the server when done
pkill -f "python -m http.server"
```

### Deployment
The site is configured for GitHub Pages deployment:
```bash
# Deploy to GitHub Pages (pushes to main branch)
git add .
git commit -m "Update portfolio content"
git push origin main
```

### SEO & Meta Tags
When adding new content, ensure you update:
- Page titles and meta descriptions
- Open Graph meta tags for social sharing
- Structured data if applicable
- Sitemap.xml entries for new pages

## File Structure Patterns

### HTML Structure
- Each page follows the same basic structure: background effects, header, main content, footer
- Uses semantic HTML5 elements
- Glass morphism containers with `.glass` class
- Responsive design with mobile-first approach

### CSS Organization
- CSS custom properties for consistent theming
- Keyframe animations for background effects and interactions
- Mobile-responsive breakpoints
- Glass morphism utility classes

### JavaScript Features
- Particle system with mouse trail effects
- Carousel functionality for project showcases
- Parallax scrolling effects
- Smooth scroll navigation
- Image hover state management
- Cookie consent handling

## Content Management

### Adding New Projects
1. Add project screenshots to `images/` directory
2. Update the appropriate section in `index.html` (web-dev, game-dev, mobile-dev, etc.)
3. Follow the existing card structure pattern
4. Ensure images have both regular and hover states where applicable

### Updating Contact Information
- Contact details are in `contact.html` and footer of `index.html`
- Social links are in the footer with SVG icons
- Payment methods are in `coffee.html`

## Site Features

### Interactive Elements
- Mouse trail particle effects
- Animated carousels for project galleries
- Hover effects on project cards with image swapping
- Glass morphism UI components
- Parallax background animations
- Smooth scroll navigation

### Responsive Design
- Mobile-first responsive breakpoints
- Flexible grid layouts
- Scalable typography using `clamp()`
- Touch-friendly interactive elements

## SEO Configuration

The site includes comprehensive SEO setup:
- Structured meta tags and Open Graph data
- Canonical URLs
- Twitter Card meta tags
- XML sitemap
- Robots.txt for search engine crawling
- Semantic HTML structure

## Performance Considerations

- Optimized images with appropriate formats and sizes
- Minimal external dependencies (only Google Fonts)
- CSS and JavaScript are minified for production
- Uses modern CSS features like backdrop-filter for effects
- Implements efficient particle systems to avoid performance issues

## Browser Compatibility

The site uses modern web features:
- CSS backdrop-filter for glass morphism effects
- CSS custom properties
- Modern JavaScript ES6+ features
- Flexbox and CSS Grid for layouts

Ensure testing across major browsers, especially for backdrop-filter support in older browsers.