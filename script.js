document.addEventListener('DOMContentLoaded', function() {
    // Header content
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="header-container w-full py-4 px-6">
            <div class="container mx-auto flex justify-between items-center">
                <a href="#" class="logo font-logo text-2xl">Цифровой музей Аксакова</a>
                
                <nav class="hidden md:block">
                    <ul class="flex space-x-8">
                        <li><a href="#life" class="nav-link">Жизнь Аксакова</a></li>
                        <li><a href="#space" class="nav-link">Космическое наследие</a></li>
                        <li><a href="#gallery" class="nav-link">3D-галерея</a></li>
                    </ul>
                </nav>
                
                <div class="hamburger md:hidden">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div class="mobile-menu container mx-auto px-6 md:hidden">
                <ul class="py-4 space-y-4">
                    <li><a href="#life" class="nav-link block">Жизнь Аксакова</a></li>
                    <li><a href="#space" class="nav-link block">Космическое наследие</a></li>
                    <li><a href="#gallery" class="nav-link block">3D-галерея</a></li>
                </ul>
            </div>
        </div>
    `;

    // Footer content
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center mb-8">
                <img src="assets/logo/logo-sign.png" alt="УУНИТ" class="footer-logo mb-4 md:mb-0">
                
                <div class="text-center md:text-right">
                    <h3 class="text-xl font-heading mb-2">Авторы проекта</h3>
                    <div class="authors-grid">
                        <div>Сакаева К.Р.</div>
                        <div>Салимов Д.В.</div>
                        <div>Имамудинов А.Р.</div>
                        <div>Мещеряков А.С.</div>
                        <div>Халиуллин А.М.</div>
                        <div>Гиззатуллина А.Н.</div>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-blue-700 pt-4 text-center">
                <p>&copy; Цифровой музей С.Т. Аксакова, 2025</p>
            </div>
        </div>
    `;

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Улучшенный параллакс эффект
let lastScrollPosition = 0;
let ticking = false;

window.addEventListener('scroll', function() {
    lastScrollPosition = window.scrollY;
    
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateParallax(lastScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});

function updateParallax(scrollPos) {
    const parallaxSection = document.querySelector('.parallax-section');
    if (!parallaxSection) return;
    
    const parallaxSpeed = 0.3;
    const offset = scrollPos * parallaxSpeed;
    parallaxSection.querySelector('.parallax-bg').style.transform = `translateY(${offset}px)`;
    
    // Эффект затемнения при скролле
    const opacity = 1 - Math.min(scrollPos / 300, 0.6);
    parallaxSection.querySelector('.overlay').style.opacity = opacity;
}