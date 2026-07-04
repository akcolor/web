// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update logo based on theme
    updateLogo(newTheme);
}

function updateLogo(theme) {
    const logo = document.getElementById('logo');
    const footerLogo = document.getElementById('footer-logo');
    const heroImage = document.getElementById('hero-image');
    
    if (logo) {
        logo.src = theme === 'dark' ? 'logo-dark.png' : 'logo-light.png';
    }
    
    if (footerLogo) {
        footerLogo.src = theme === 'dark' ? 'logo-dark.png' : 'logo-light.png';
    }
    
    if (heroImage) {
        heroImage.src = theme === 'dark' ? 'akcolor-hero-dark.png' : 'akcolor-hero-light.png';
    }
}

// Initialize logo based on current theme
updateLogo(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Google Reviews Integration
class GoogleReviews {
    constructor() {
        this.reviewsGrid = document.getElementById('reviewsGrid');
        this.reviewsLoading = document.getElementById('reviewsLoading');
        this.init();
    }

    async init() {
        // Show loading state
        this.showLoading(true);
        
        try {
            // In a real implementation, you would fetch from Google Places API
            // For now, we'll use mock data
            const reviews = await this.fetchReviews();
            this.displayReviews(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
            this.showError();
        } finally {
            this.showLoading(false);
        }
    }

    async fetchReviews() {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Mock data - replace with actual Google Places API call
        return [
            {
                author: 'Ahmet Yılmaz',
                rating: 5,
                text: 'Çok profesyonel hizmet aldım. Fotoğraflarım mükemmel çıktı. Kesinlikle tavsiye ederim!',
                date: '2 gün önce'
            },
            {
                author: 'Ayşe Demir',
                rating: 5,
                text: 'Vize fotoğrafım için gittim, çok hızlı ve kaliteli hizmet verdiler. Teşekkürler!',
                date: '1 hafta önce'
            },
            {
                author: 'Mehmet Kaya',
                rating: 5,
                text: '40 yıllık deneyim gerçekten fark ediliyor. Çok memnun kaldım.',
                date: '2 hafta önce'
            },
            {
                author: 'Fatma Özkan',
                rating: 5,
                text: 'Pasaport fotoğrafım için gittim, çok memnun kaldım. Hızlı ve kaliteli hizmet.',
                date: '3 hafta önce'
            },
            {
                author: 'Ali Yıldız',
                rating: 5,
                text: 'Amatör baskı hizmeti aldım, sonuçlar harika. Fiyatlar da çok uygun.',
                date: '1 ay önce'
            },
            {
                author: 'Zeynep Kaya',
                rating: 5,
                text: 'Çok güler yüzlü personel, kaliteli hizmet. Kesinlikle tavsiye ederim.',
                date: '1 ay önce'
            }
        ];
    }

    displayReviews(reviews) {
        if (!this.reviewsGrid) return;
        
        this.reviewsGrid.innerHTML = reviews.map(review => `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-stars">${'★'.repeat(review.rating)}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <p class="review-text">"${review.text}"</p>
                <div class="reviewer-name">- ${review.author}</div>
            </div>
        `).join('');
    }

    showLoading(show) {
        if (this.reviewsLoading) {
            this.reviewsLoading.style.display = show ? 'block' : 'none';
        }
    }

    showError() {
        if (this.reviewsGrid) {
            this.reviewsGrid.innerHTML = `
                <div class="review-error">
                    <p>Yorumlar yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</p>
                </div>
            `;
        }
    }
}

// Map Directions Functionality
function openDirections() {
    const address = 'Akcolor Fotoğrafçılık, Sipahioğlu Cd No:4/A, 34149 Bakırköy/İstanbul';
    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(directionsUrl, '_blank');
}

// WhatsApp Floating Button
function initWhatsAppButton() {
    // The WhatsApp button is already in the HTML
    // This function can be used for additional functionality if needed
    console.log('WhatsApp button initialized');
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google reviews if the section exists
    if (document.getElementById('reviewsGrid')) {
        new GoogleReviews();
    }

    // Initialize WhatsApp button
    initWhatsAppButton();

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .baski-card, .review-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Phone number formatting
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.slice(0, 3) + ' ' + value.slice(3);
        } else if (value.length <= 8) {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
        } else {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 8) + ' ' + value.slice(8, 10);
        }
    }
    input.value = value;
}

// Add phone formatting to phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', () => formatPhoneNumber(input));
    });
});
