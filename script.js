// Gallery data
const galleryData = [
    { src: './img/casamento-1.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-2.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-3.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-4.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-5.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-6.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-7.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-8.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-9.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-10.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-11.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-12.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-13.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/casamento-14.jpg', category: 'casamento', title: 'Casamento' },
    { src: './img/formatura-1.jpg', category: 'formatura', title: 'Formatura' },
    { src: './img/formatura-2.jpg', category: 'formatura', title: 'Formatura' },
    { src: './img/formatura-3.jpg', category: 'formatura', title: 'Formatura' },
    { src: './img/formatura-4.jpg', category: 'formatura', title: 'Formatura' },
    { src: './img/confrateternizacao-1.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-2.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-3.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-4.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-5.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-6.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-7.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-8.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-9.jpg', category: 'confrateternizacao', title: 'Confraternização' },
    { src: './img/confrateternizacao-10.jpg', category: 'confrateternizacao', title: 'Confraternização' }
];

// Hero slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
    updateDots();
}

function initHeroDots() {
    const dotsContainer = document.getElementById('heroDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    updateDots();
}

// Auto slide every 6 seconds
setInterval(nextSlide, 6000);

// Espaço carousel
const carouselTrack = document.getElementById('carouselTrack');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const totalCarouselSlides = carouselSlides.length;
let carouselIndex = 0;
let carouselAutoplay;

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === carouselIndex);
    });
}

function goToCarouselSlide(n) {
    carouselIndex = (n + totalCarouselSlides) % totalCarouselSlides;
    updateCarousel();
}

function nextCarouselSlide() {
    goToCarouselSlide(carouselIndex + 1);
}

function prevCarouselSlide() {
    goToCarouselSlide(carouselIndex - 1);
}

function initCarouselDots() {
    const dotsContainer = document.getElementById('carouselDots');
    if (!dotsContainer) return;
    for (let i = 0; i < totalCarouselSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para slide ${i + 1}`);
        dot.addEventListener('click', () => {
            goToCarouselSlide(i);
            resetCarouselAutoplay();
        });
        dotsContainer.appendChild(dot);
    }
}

function resetCarouselAutoplay() {
    clearInterval(carouselAutoplay);
    carouselAutoplay = setInterval(nextCarouselSlide, 5000);
}

if (carouselTrack && totalCarouselSlides > 0) {
    initCarouselDots();
    document.getElementById('carouselNext').addEventListener('click', () => {
        nextCarouselSlide();
        resetCarouselAutoplay();
    });
    document.getElementById('carouselPrev').addEventListener('click', () => {
        prevCarouselSlide();
        resetCarouselAutoplay();
    });
    resetCarouselAutoplay();
}

// Initialize hero dots on page load
document.addEventListener('DOMContentLoaded', () => {
    initHeroDots();
    loadGallery();
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Load gallery
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    galleryData.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="gallery-overlay">${item.title}</div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Gallery filters
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            eventType: formData.get('eventType'),
            message: formData.get('message')
        };

        // Show success message (in real application, send to server)
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Mensagem enviada!';
        submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';

        // Reset after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
        }, 3000);

        console.log('Formulário enviado:', data);
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animate elements on scroll
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

// Observe cards and elements for animation
document.querySelectorAll('.event-block, .feature-circle-item, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

console.log('Colher de Pau website loaded successfully!');
