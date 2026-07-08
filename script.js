// ===== Dados da galeria =====
const galleryData = [
    { src: './img/casamento-1.jpg', category: 'casamento', title: 'Casamento', alt: 'Cerimônia de casamento ao ar livre no Colher de Pau' },
    { src: './img/casamento-4.jpg', category: 'casamento', title: 'Casamento', alt: 'Mini wedding intimista em meio à natureza' },
    { src: './img/casamento-5.jpg', category: 'casamento', title: 'Casamento', alt: 'Decoração de casamento com flores' },
    { src: './img/casamento-6.jpg', category: 'casamento', title: 'Casamento', alt: 'Cerimônia de casamento entre árvores' },
    { src: './img/casamento-7.jpg', category: 'casamento', title: 'Casamento', alt: 'Entrada decorada para cerimônia de casamento' },
    { src: './img/casamento-8.jpg', category: 'casamento', title: 'Casamento', alt: 'Salão decorado para recepção de casamento' },
    { src: './img/casamento-9.jpg', category: 'casamento', title: 'Casamento', alt: 'Mesa de doces e bolo de casamento' },
    { src: './img/casamento-10.jpg', category: 'casamento', title: 'Casamento', alt: 'Decoração premium com cadeiras Chiavari douradas' },
    { src: './img/casamento-11.jpg', category: 'casamento', title: 'Casamento', alt: 'Mesa de convidados decorada com sofisticação' },
    { src: './img/casamento-12.jpg', category: 'casamento', title: 'Casamento', alt: 'Detalhes da decoração de casamento' },
    { src: './img/casamento-13.jpg', category: 'casamento', title: 'Casamento', alt: 'Recepção de casamento no salão principal' },
    { src: './img/casamento-14.jpg', category: 'casamento', title: 'Casamento', alt: 'Festa de casamento no Colher de Pau' },
    { src: './img/formatura-1.jpg', category: 'formatura', title: 'Formatura', alt: 'Festa de formatura no Colher de Pau' },
    { src: './img/formatura-2.jpg', category: 'formatura', title: 'Formatura', alt: 'Decoração de festa de formatura' },
    { src: './img/formatura-3.jpg', category: 'formatura', title: 'Formatura', alt: 'Celebração de formatura com convidados' },
    { src: './img/formatura-4.jpg', category: 'formatura', title: 'Formatura', alt: 'Mesa personalizada de festa de formatura' },
    { src: './img/confrateternizacao-1.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Confraternização de empresa no Colher de Pau' },
    { src: './img/confrateternizacao-2.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Evento social com convidados reunidos' },
    { src: './img/confrateternizacao-3.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Evento corporativo com buffet exclusivo' },
    { src: './img/confrateternizacao-4.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Encontro entre amigos e família' },
    { src: './img/confrateternizacao-5.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Salão climatizado com lareira preparado para evento' },
    { src: './img/confrateternizacao-6.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Confraternização em ambiente rústico' },
    { src: './img/confrateternizacao-7.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Pista de dança com iluminação profissional' },
    { src: './img/confrateternizacao-8.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Vista do salão principal do Colher de Pau' },
    { src: './img/confrateternizacao-9.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Espaço coberto com mesas para refeições' },
    { src: './img/confrateternizacao-10.jpg', category: 'confrateternizacao', title: 'Confraternização', alt: 'Área externa coberta com vista para o jardim' }
];

// Preferência do usuário por menos movimento (acessibilidade)
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== Hero slider =====
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
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Ir para foto ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    document.querySelectorAll('.hero-dots .dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    updateDots();
}

if (!prefersReducedMotion) {
    setInterval(nextSlide, 6000);
}

// ===== Carrossel "Conheça Nosso Espaço" =====
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
        dot.type = 'button';
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
    if (!prefersReducedMotion) {
        carouselAutoplay = setInterval(nextCarouselSlide, 5000);
    }
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

    // Swipe por toque/mouse no carrossel
    let swipeStartX = null;
    carouselTrack.addEventListener('pointerdown', (e) => {
        swipeStartX = e.clientX;
    });
    carouselTrack.addEventListener('pointerup', (e) => {
        if (swipeStartX === null) return;
        const delta = e.clientX - swipeStartX;
        if (Math.abs(delta) > 50) {
            delta < 0 ? nextCarouselSlide() : prevCarouselSlide();
            resetCarouselAutoplay();
        }
        swipeStartX = null;
    });
    carouselTrack.addEventListener('pointercancel', () => { swipeStartX = null; });
}

// ===== Menu hamburger =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ===== Sombra da navbar ao rolar =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ===== Galeria =====
let visibleGalleryItems = [];

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('button');
        galleryItem.type = 'button';
        galleryItem.className = `gallery-item ${item.category}`;
        galleryItem.setAttribute('aria-label', `Ampliar foto: ${item.alt}`);
        galleryItem.dataset.index = index;
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" width="400" height="400">
            <div class="gallery-overlay">${item.title}</div>
        `;
        galleryItem.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(galleryItem);
    });
    refreshVisibleItems('all');
}

function refreshVisibleItems(filter) {
    visibleGalleryItems = galleryData
        .map((item, index) => ({ ...item, index }))
        .filter(item => filter === 'all' || item.category === filter);
}

// Filtros da galeria
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        refreshVisibleItems(filter);

        document.querySelectorAll('.gallery-item').forEach(item => {
            const show = filter === 'all' || item.classList.contains(filter);
            if (show) {
                item.style.display = 'block';
                requestAnimationFrame(() => { item.style.opacity = '1'; });
            } else {
                item.style.opacity = '0';
                setTimeout(() => { item.style.display = 'none'; }, 300);
            }
        });
    });
});

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
let lightboxPosition = 0;

function openLightbox(galleryIndex) {
    lightboxPosition = visibleGalleryItems.findIndex(item => item.index === galleryIndex);
    if (lightboxPosition < 0) lightboxPosition = 0;
    showLightboxImage();
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('lightboxClose').focus();
}

function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
}

function showLightboxImage() {
    const item = visibleGalleryItems[lightboxPosition];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxCaption.textContent = `${item.title} — ${lightboxPosition + 1} de ${visibleGalleryItems.length}`;
}

function lightboxNext() {
    lightboxPosition = (lightboxPosition + 1) % visibleGalleryItems.length;
    showLightboxImage();
}

function lightboxPrev() {
    lightboxPosition = (lightboxPosition - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
    showLightboxImage();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', lightboxNext);
document.getElementById('lightboxPrev').addEventListener('click', lightboxPrev);

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') lightboxNext();
    if (e.key === 'ArrowLeft') lightboxPrev();
});

// Swipe no lightbox
let lightboxSwipeX = null;
lightbox.addEventListener('pointerdown', (e) => { lightboxSwipeX = e.clientX; });
lightbox.addEventListener('pointerup', (e) => {
    if (lightboxSwipeX === null) return;
    const delta = e.clientX - lightboxSwipeX;
    if (Math.abs(delta) > 50) {
        delta < 0 ? lightboxNext() : lightboxPrev();
    }
    lightboxSwipeX = null;
});

// ===== Formulário → WhatsApp =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const lines = [
            `Olá! Meu nome é ${formData.get('name')}.`,
            `Gostaria de um orçamento para: ${formData.get('eventType')}.`,
            formData.get('message'),
        ];
        const phone = formData.get('phone');
        const email = formData.get('email');
        if (phone) lines.push(`Telefone: ${phone}`);
        if (email) lines.push(`E-mail: ${email}`);

        const url = `https://wa.me/5548998282753?text=${encodeURIComponent(lines.join('\n\n'))}`;
        window.open(url, '_blank', 'noopener');

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '✓ Mensagem preparada no WhatsApp!';

        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalHTML;
        }, 4000);
    });
}

// ===== Scroll suave =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== Animações de entrada ao rolar =====
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealElements = [];
    let observerFired = false;

    const revealElement = (el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    };

    const observer = new IntersectionObserver((entries) => {
        observerFired = true;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                revealElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Efeito escalonado: cada item de um grupo entra com um pequeno atraso
    const revealGroups = [
        document.querySelectorAll('.event-block'),
        document.querySelectorAll('.feature-circle-item'),
        document.querySelectorAll('.info-box'),
        document.querySelectorAll('.amenity-item')
    ];

    revealGroups.forEach(group => {
        group.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.transitionDelay = `${Math.min(i * 90, 450)}ms`;
            revealElements.push(el);
            observer.observe(el);
        });
    });

    // Segurança: se o observer não disparar (navegador com comportamento
    // inesperado), garante que nenhum conteúdo fique invisível
    setTimeout(() => {
        if (!observerFired) {
            observer.disconnect();
            revealElements.forEach(revealElement);
        }
    }, 1500);
}

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', () => {
    initHeroDots();
    loadGallery();
    document.getElementById('year').textContent = new Date().getFullYear();
});
