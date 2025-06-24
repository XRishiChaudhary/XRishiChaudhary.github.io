# 🚀 Futuristic Resume Website

A stunning, minimalistic resume website with futuristic black and neon green color scheme, featuring complex animations and physics effects.

## ✨ Features

### 🎨 Design
- **Futuristic Color Scheme**: Black background with neon green (#00ff41) accents
- **Minimalistic Layout**: Clean, modern design with excellent typography
- **Responsive Design**: Fully responsive across all devices
- **Custom Fonts**: Orbitron (for headings) and Rajdhani (for body text)

### 🎭 Animations & Effects
- **Particle System**: Interactive floating particles with connecting lines
- **Mouse Trail**: Glowing trail that follows your cursor
- **Typing Animation**: Animated text typing effect for the hero section
- **Magnetic Buttons**: Interactive magnetic effect on hover
- **Parallax Scrolling**: Smooth parallax effects on scroll
- **Glitch Effect**: Random glitch animations on the logo
- **Scroll Progress**: Animated progress bar at the top
- **Dynamic Background**: Animated grid pattern background
- **Hover Effects**: Complex hover animations throughout
- **Fade-in Animations**: Scroll-triggered animations for sections

### 📱 Sections
- **Hero Section**: Animated introduction with floating tech stack
- **About Me**: Personal information with skill categories
- **Projects**: Featured projects with hover effects and tech tags
- **Certifications**: Professional certifications with icons
- **Contact**: Contact information and social links

### 🛠 Technical Features
- **Pure HTML/CSS/JavaScript**: No frameworks required
- **CSS Custom Properties**: Easy color scheme customization
- **Intersection Observer**: Performance-optimized scroll animations
- **Canvas Animations**: High-performance particle and background effects
- **Audio Context**: Optional hover sound effects
- **Mobile Navigation**: Hamburger menu for mobile devices

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content to match your information

### Customization

#### Personal Information
Edit the following sections in `index.html`:

```html
<!-- Hero Section -->
<span class="title-name">Your Name</span>
<span class="title-role">Your Role</span>

<!-- About Section -->
<p class="about-description">Your description here...</p>

<!-- Contact Information -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
```

#### Color Scheme
Modify the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #00ff41;    /* Main neon green */
    --secondary-color: #00d4aa;  /* Secondary teal */
    --background-dark: #0a0a0a;  /* Main background */
    --background-darker: #050505; /* Secondary background */
}
```

#### Projects
Add your projects in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Project image or placeholder -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

#### Certifications
Add your certifications:

```html
<div class="certification-card">
    <div class="cert-icon">
        <i class="fab fa-icon-name"></i>
    </div>
    <div class="cert-content">
        <h3>Certification Name</h3>
        <p>Issuing Organization</p>
        <span class="cert-date">Year</span>
    </div>
</div>
```

## 🎯 Performance Features

- **Optimized Animations**: 60fps smooth animations
- **Lazy Loading**: Scroll-triggered animations
- **Efficient Rendering**: Canvas-based effects
- **Mobile Optimized**: Touch-friendly interactions

## 🌟 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📱 Mobile Features

- **Responsive Design**: Adapts to all screen sizes
- **Touch Interactions**: Optimized for mobile devices
- **Mobile Navigation**: Hamburger menu
- **Performance Optimized**: Smooth animations on mobile

## 🎨 Animation Details

### Particle System
- 50 floating particles
- Dynamic connections based on proximity
- Smooth movement with velocity
- Screen wrapping for infinite movement

### Mouse Trail
- Glowing trail following cursor
- Fade-out effect
- Performance optimized with cleanup

### Typing Animation
- Configurable typing speed
- Smooth character-by-character display
- Reusable for any text element

### Magnetic Effect
- Interactive button movement
- Smooth reset animation
- Applied to all interactive elements

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style with CSS in `styles.css`
3. Add scroll animations in `script.js`

### Custom Animations
Create new animation classes:

```css
.custom-animation {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
}

.custom-animation.visible {
    opacity: 1;
    transform: translateY(0);
}
```

### Performance Tuning
- Adjust particle count in `ParticleSystem` class
- Modify animation timing in CSS
- Tune scroll observer thresholds

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the website, please open an issue or contact the developer.

---

**Built with ❤️ and lots of neon green pixels!** 