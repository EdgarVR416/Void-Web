document.addEventListener('DOMContentLoaded', function() {
    // Loader animation
    const loader = document.querySelector('.loader');
    
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);

    // Custom cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', function(e) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
        
        // Add magnetic effect to buttons and links
        const interactiveElements = document.querySelectorAll('a, button, .btn, .category-tab, .tech-item');
        
        interactiveElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const distanceX = Math.abs(posX - centerX);
            const distanceY = Math.abs(posY - centerY);
            
            if (distanceX < rect.width / 2 + 30 && distanceY < rect.height / 2 + 30) {
                cursorDot.classList.add('cursor-hover');
                cursorOutline.classList.add('cursor-hover');
            } else {
                cursorDot.classList.remove('cursor-hover');
                cursorOutline.classList.remove('cursor-hover');
            }
        });
    });
    
    document.addEventListener('mousedown', function() {
        cursorDot.classList.add('cursor-click');
        cursorOutline.classList.add('cursor-click');
    });
    
    document.addEventListener('mouseup', function() {
        cursorDot.classList.remove('cursor-click');
        cursorOutline.classList.remove('cursor-click');
    });
    
    // Hide cursor when mouse leaves the window
    document.addEventListener('mouseleave', function() {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });

    // Highlight word animations
    const animateHighlights = () => {
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach((highlight, index) => {
            setTimeout(() => {
                highlight.style.opacity = '0.7';
                setTimeout(() => {
                    highlight.style.opacity = '1';
                }, 300);
            }, index * 500);
        });
    };

    animateHighlights();
    setInterval(animateHighlights, 5000);

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Particles.js initialization
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#c0c0c0"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#c0c0c0",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // ScrollReveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px', 
        duration: 800,    
        delay: 100,       
        reset: false
    });

    sr.reveal('.hero-content');
    sr.reveal('.service-card', { interval: 150 });
    sr.reveal('.portfolio-item', { interval: 150 });
    sr.reveal('.skill-category', { interval: 150 });
    sr.reveal('.testimonial-item', { interval: 150 });
    sr.reveal('.tech-item', { interval: 100 });
    sr.reveal('.process-item', { interval: 150 });
    sr.reveal('.pricing-card', { interval: 150 });
    sr.reveal('.stat-item', { interval: 100 });
    sr.reveal('.discord-content', { delay: 200 });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            if (this.classList.contains('primary-btn')) {
                this.style.boxShadow = '0 5px 15px rgba(192, 192, 192, 0.4)';
            } else if (this.classList.contains('secondary-btn')) {
                this.style.background = 'rgba(192, 192, 192, 0.1)';
                this.style.boxShadow = '0 5px 15px rgba(192, 192, 192, 0.2)';
            }
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = '';
            if (this.classList.contains('primary-btn')) {
                this.style.boxShadow = '0 3px 10px rgba(192, 192, 192, 0.3)';
            } else if (this.classList.contains('secondary-btn')) {
                this.style.background = 'transparent';
                this.style.boxShadow = '0 3px 10px rgba(192, 192, 192, 0.1)';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Skill progress bars animation
    const skillItems = document.querySelectorAll('.skill-item');
    
    // On hover animation
    skillItems.forEach(item => {
        const progressBar = item.querySelector('.skill-progress-bar');
        const percentage = progressBar.getAttribute('data-percentage');
        
        progressBar.style.width = '0%';
        
        item.addEventListener('mouseenter', function() {
            progressBar.style.width = percentage + '%';
        });
    });
    
    // Animate on scroll
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillItems.forEach(item => {
                        const progressBar = item.querySelector('.skill-progress-bar');
                        const percentage = progressBar.getAttribute('data-percentage');
                        
                        setTimeout(() => {
                            progressBar.style.width = percentage + '%';
                        }, 200);
                    });
                    
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillsSection);
    }
    
    // Tech stack item hover effects
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Portfolio filter functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                categoryTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const category = this.getAttribute('data-category');
                
                portfolioItems.forEach(item => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Service Modals
    const serviceModalTriggers = document.querySelectorAll('.service-modal-trigger');
    const serviceModals = {
        design: document.getElementById('design-modal'),
        development: document.getElementById('development-modal'),
        optimization: document.getElementById('optimization-modal')
    };
    
    // Open modal when Learn More is clicked
    serviceModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            
            const service = this.getAttribute('data-service');
            if (serviceModals[service]) {
                // Add modal elements if they don't exist yet
                if (!document.body.contains(serviceModals[service])) {
                    createServiceModal(service);
                }
                
                serviceModals[service].style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                setTimeout(() => {
                    serviceModals[service].classList.add('active');
                }, 10);
            }
        });
    });
    
    // Function to create service modals dynamically
    function createServiceModal(service) {
        const modal = document.createElement('div');
        modal.id = `${service}-modal`;
        modal.className = 'service-modal';
        
        let title, content;
        
        switch(service) {
            case 'design':
                title = 'Web Design Services';
                content = `
                    <p>At Void, we create stunning, functional designs that elevate your brand and engage your audience. Our designs are not just visually appealing but also user-focused and conversion-optimized.</p>
                    
                    <h3>Our Design Process</h3>
                    <p>We follow a comprehensive approach to ensure your design meets all objectives:</p>
                    <ol>
                        <li>Discovery & Research</li>
                        <li>Wireframing & Prototyping</li>
                        <li>Visual Design & Branding</li>
                        <li>Feedback & Iteration</li>
                        <li>Finalization & Implementation</li>
                    </ol>
                    
                    <h3>Key Design Services</h3>
                    <div class="service-features">
                        <div class="service-feature">
                            <i class="fas fa-laptop"></i>
                            <div>
                                <h4>UI/UX Design</h4>
                                <p>User-centric interfaces that make navigation intuitive and enjoyable.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-mobile-alt"></i>
                            <div>
                                <h4>Responsive Design</h4>
                                <p>Designs that look and function perfectly across all devices and screen sizes.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-paint-roller"></i>
                            <div>
                                <h4>Brand Development</h4>
                                <p>Visual identity creation that reflects your brand's unique personality.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-bezier-curve"></i>
                            <div>
                                <h4>Interactive Prototyping</h4>
                                <p>Clickable prototypes that simulate the final product experience.</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'development':
                title = 'Development Services';
                content = `
                    <p>Our development team turns designs into fully functional websites with clean, efficient, and scalable code. We build solutions that are not only robust but also easy to maintain and extend.</p>
                    
                    <h3>Our Development Approach</h3>
                    <p>We follow industry best practices to deliver high-quality code:</p>
                    <ol>
                        <li>Technical Requirements Analysis</li>
                        <li>Architecture Planning</li>
                        <li>Agile Development Process</li>
                        <li>Regular Testing & QA</li>
                        <li>Deployment & Maintenance</li>
                    </ol>
                    
                    <h3>Key Development Services</h3>
                    <div class="service-features">
                        <div class="service-feature">
                            <i class="fas fa-code"></i>
                            <div>
                                <h4>Frontend Development</h4>
                                <p>Modern, responsive interfaces using the latest technologies like React, Vue, or vanilla JS.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-server"></i>
                            <div>
                                <h4>Backend Development</h4>
                                <p>Robust server-side solutions that power your application's functionality.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-database"></i>
                            <div>
                                <h4>Database Design</h4>
                                <p>Optimized data structures that ensure performance and scalability.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-plug"></i>
                            <div>
                                <h4>API Development</h4>
                                <p>Custom APIs that connect your website with external services and databases.</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
                
            case 'optimization':
                title = 'Optimization Services';
                content = `
                    <p>We optimize your website for maximum performance, search engine visibility, and conversion rates. Our optimization services ensure your site not only looks great but also delivers results.</p>
                    
                    <h3>Our Optimization Process</h3>
                    <p>We take a data-driven approach to optimization:</p>
                    <ol>
                        <li>Performance Audit</li>
                        <li>SEO Analysis</li>
                        <li>User Experience Assessment</li>
                        <li>Implementation of Improvements</li>
                        <li>Ongoing Monitoring & Refinement</li>
                    </ol>
                    
                    <h3>Key Optimization Services</h3>
                    <div class="service-features">
                        <div class="service-feature">
                            <i class="fas fa-tachometer-alt"></i>
                            <div>
                                <h4>Performance Optimization</h4>
                                <p>Speed up your website to reduce bounce rates and improve user satisfaction.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-search"></i>
                            <div>
                                <h4>SEO Enhancement</h4>
                                <p>Improve your search engine rankings to drive more organic traffic.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-user-check"></i>
                            <div>
                                <h4>Conversion Rate Optimization</h4>
                                <p>Turn more visitors into customers with data-driven CRO techniques.</p>
                            </div>
                        </div>
                        <div class="service-feature">
                            <i class="fas fa-mobile-alt"></i>
                            <div>
                                <h4>Mobile Optimization</h4>
                                <p>Ensure your site performs flawlessly on all mobile devices.</p>
                            </div>
                        </div>
                    </div>
                `;
                break;
        }
        
        modal.innerHTML = `
            <div class="service-modal-content">
                <div class="service-modal-header">
                    <h2>${title}</h2>
                    <button class="service-modal-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="service-modal-body">
                    ${content}
                </div>
                <div class="service-modal-footer">
                    <a href="#discord" class="btn primary-btn">Get Started with ${service.charAt(0).toUpperCase() + service.slice(1)}</a>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        serviceModals[service] = modal;
        
        // Add close functionality for this modal
        const closeBtn = modal.querySelector('.service-modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 500);
        });
        
        // Close on click outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }, 500);
            }
        });
    }
    
    // Close existing modals with close button
    document.querySelectorAll('.service-modal-close').forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.service-modal');
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 500);
        });
    });
    
    // Close modals when clicking outside content
    document.querySelectorAll('.service-modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                setTimeout(() => {
                    this.style.display = 'none';
                    document.body.style.overflow = '';
                }, 500);
            }
        });
    });
    
    // Testimonial slider
    const testimonialTrack = document.querySelector('.testimonial-track');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (testimonialTrack) {
        let currentIndex = 0;
        
        // Set initial active state
        testimonialItems[0].classList.add('active');
        
        // Function to update the slider
        const updateSlider = () => {
            const translateValue = -currentIndex * 100 + '%';
            testimonialTrack.style.transform = `translateX(${translateValue})`;
            
            // Update active classes
            testimonialItems.forEach((item, index) => {
                if (index === currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
            
            // Update dots
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        };
        
        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialItems.length - 1;
                updateSlider();
            });
        }
        
        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
        }
        
        // Dots navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
        
        // Add touch swipe functionality
        let touchStartX = 0;
        let touchEndX = 0;
        
        testimonialTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        testimonialTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50; // minimum distance to be considered a swipe
            
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left, go to next
                currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            } else if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right, go to previous
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialItems.length - 1;
                updateSlider();
            }
        };
        
        // Auto slide every 5 seconds
        let autoSlide = setInterval(() => {
            currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
            updateSlider();
        }, 5000);
        
        // Pause auto slide on hover or touch
        testimonialTrack.addEventListener('mouseenter', () => {
            clearInterval(autoSlide);
        });
        
        testimonialTrack.addEventListener('mouseleave', () => {
            autoSlide = setInterval(() => {
                currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            }, 5000);
        });
        
        testimonialTrack.addEventListener('touchstart', () => {
            clearInterval(autoSlide);
        });
        
        testimonialTrack.addEventListener('touchend', () => {
            autoSlide = setInterval(() => {
                currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
                updateSlider();
            }, 5000);
        });
    }
    
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsSection = document.querySelector('.stats-section');
    
    if (statsSection && statNumbers.length > 0) {
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 50; // Adjust the speed here
            const timer = setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current);
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                }
            }, 30);
        };
        
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    statNumbers.forEach(statNumber => {
                        const target = parseInt(statNumber.getAttribute('data-count'));
                        animateCounter(statNumber, target);
                    });
                    statObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });
        
        statObserver.observe(statsSection);
    }
});