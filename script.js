// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const viewProjectsBtn = document.getElementById('view-projects-btn');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links and View Projects button
function smoothScrollTo(targetId) {
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScrollTo(targetId);
    });
});

// View Projects button functionality
if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollTo('#projects');
    });
}

// Particle System
class ParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.createParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 255, 65, ${particle.opacity})`;
            this.ctx.fill();

            // Draw connections
            this.particles.forEach(otherParticle => {
                const distance = Math.sqrt(
                    Math.pow(particle.x - otherParticle.x, 2) + 
                    Math.pow(particle.y - otherParticle.y, 2)
                );
                
                if (distance < 100) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(0, 255, 65, ${0.1 * (1 - distance / 100)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
const particleSystem = new ParticleSystem();

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.section-title, .about-content, .project-card, .certification-card');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.animationDelay = `${index * 0.2}s`;
        observer.observe(el);
    });

    // Add slide animations to specific elements
    const aboutText = document.querySelector('.about-text');
    const aboutVisual = document.querySelector('.about-visual');
    
    if (aboutText) {
        aboutText.classList.add('slide-in-left');
        observer.observe(aboutText);
    }
    
    if (aboutVisual) {
        aboutVisual.classList.add('slide-in-right');
        observer.observe(aboutVisual);
    }
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-background, .floating-card');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Mouse Trail Effect
class MouseTrail {
    constructor() {
        this.trail = [];
        this.maxTrailLength = 20;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', (e) => {
            this.addPoint(e.clientX, e.clientY);
        });
    }

    addPoint(x, y) {
        this.trail.push({ x, y, timestamp: Date.now() });
        
        if (this.trail.length > this.maxTrailLength) {
            this.trail.shift();
        }
        
        this.drawTrail();
    }

    drawTrail() {
        // Remove existing trail elements
        const existingTrails = document.querySelectorAll('.mouse-trail');
        existingTrails.forEach(trail => trail.remove());

        // Draw new trail
        this.trail.forEach((point, index) => {
            const trailElement = document.createElement('div');
            trailElement.className = 'mouse-trail';
            trailElement.style.position = 'fixed';
            trailElement.style.left = point.x + 'px';
            trailElement.style.top = point.y + 'px';
            trailElement.style.width = '4px';
            trailElement.style.height = '4px';
            trailElement.style.background = '#00ff41';
            trailElement.style.borderRadius = '50%';
            trailElement.style.pointerEvents = 'none';
            trailElement.style.zIndex = '9999';
            trailElement.style.opacity = (index / this.trail.length).toString();
            trailElement.style.boxShadow = '0 0 10px #00ff41';
            
            document.body.appendChild(trailElement);

            // Remove trail element after animation
            setTimeout(() => {
                if (trailElement.parentNode) {
                    trailElement.parentNode.removeChild(trailElement);
                }
            }, 100);
        });
    }
}

// Initialize mouse trail
const mouseTrail = new MouseTrail();

// Typing Animation
class TypeWriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.currentText = '';
        this.currentIndex = 0;
        this.isTyping = false;
    }

    start() {
        if (this.isTyping) return;
        
        this.isTyping = true;
        this.element.textContent = '';
        this.currentIndex = 0;
        this.type();
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.currentText += this.text.charAt(this.currentIndex);
            this.element.textContent = this.currentText;
            this.currentIndex++;
            
            setTimeout(() => this.type(), this.speed);
        } else {
            this.isTyping = false;
        }
    }
}

// Initialize typing animation for hero title
document.addEventListener('DOMContentLoaded', () => {
    const titleName = document.querySelector('.title-name');
    if (titleName) {
        const originalText = titleName.textContent;
        const typeWriter = new TypeWriter(titleName, originalText, 150);
        
        // Start typing animation after a delay
        setTimeout(() => {
            typeWriter.start();
        }, 1000);
    }
});

// Magnetic Effect for Buttons
class MagneticEffect {
    constructor() {
        this.buttons = document.querySelectorAll('.btn, .project-link, .social-link');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                this.magneticEffect(e, button);
            });
            
            button.addEventListener('mouseleave', () => {
                this.resetEffect(button);
            });
        });
    }

    magneticEffect(e, button) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const strength = 0.3;
        button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    }

    resetEffect(button) {
        button.style.transform = 'translate(0, 0)';
    }
}

// Initialize magnetic effect
const magneticEffect = new MagneticEffect();

// Glitch Effect
class GlitchEffect {
    constructor(element) {
        this.element = element;
        this.originalText = element.textContent;
        this.init();
    }

    init() {
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.glitch();
            }
        }, 3000);
    }

    glitch() {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchedText = '';
        
        for (let i = 0; i < this.originalText.length; i++) {
            if (Math.random() < 0.1) {
                glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
            } else {
                glitchedText += this.originalText[i];
            }
        }
        
        this.element.textContent = glitchedText;
        
        setTimeout(() => {
            this.element.textContent = this.originalText;
        }, 100);
    }
}

// Apply glitch effect to logo
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo-text');
    if (logo) {
        new GlitchEffect(logo);
    }
});

// Scroll Progress Indicator
class ScrollProgress {
    constructor() {
        this.progressBar = document.createElement('div');
        this.init();
    }

    init() {
        this.progressBar.style.position = 'fixed';
        this.progressBar.style.top = '0';
        this.progressBar.style.left = '0';
        this.progressBar.style.width = '0%';
        this.progressBar.style.height = '3px';
        this.progressBar.style.background = 'linear-gradient(90deg, #00ff41, #00d4aa)';
        this.progressBar.style.zIndex = '10000';
        this.progressBar.style.transition = 'width 0.1s ease';
        this.progressBar.style.boxShadow = '0 0 10px #00ff41';
        
        document.body.appendChild(this.progressBar);
        
        window.addEventListener('scroll', () => {
            this.updateProgress();
        });
    }

    updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        this.progressBar.style.width = scrollPercent + '%';
    }
}

// Initialize scroll progress
const scrollProgress = new ScrollProgress();

// Hover Sound Effect (Optional)
class SoundEffect {
    constructor() {
        this.audioContext = null;
        this.init();
    }

    init() {
        document.addEventListener('click', () => {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
        });
    }

    playHoverSound() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, this.audioContext.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    }
}

// Initialize sound effects
const soundEffect = new SoundEffect();

// Add hover sound to interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .project-link, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            soundEffect.playHoverSound();
        });
    });
});

// Dynamic Background Pattern
class DynamicBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.1';
        document.body.appendChild(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const time = Date.now() * 0.001;
        
        // Draw animated grid
        this.ctx.strokeStyle = '#00ff41';
        this.ctx.lineWidth = 1;
        
        for (let x = 0; x < this.canvas.width; x += 50) {
            for (let y = 0; y < this.canvas.height; y += 50) {
                const offsetX = Math.sin(time + x * 0.01) * 10;
                const offsetY = Math.cos(time + y * 0.01) * 10;
                
                this.ctx.beginPath();
                this.ctx.moveTo(x + offsetX, y);
                this.ctx.lineTo(x + offsetX, y + 50);
                this.ctx.stroke();
                
                this.ctx.beginPath();
                this.ctx.moveTo(x, y + offsetY);
                this.ctx.lineTo(x + 50, y + offsetY);
                this.ctx.stroke();
            }
        }
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize dynamic background
const dynamicBackground = new DynamicBackground();

// Performance optimization
let ticking = false;

function updateOnScroll() {
    // Update scroll-based animations here
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Futuristic Resume Website Loaded!');
    console.log('✨ Features: Particle System, Mouse Trail, Typing Animation, Magnetic Effects, and more!');
}); 