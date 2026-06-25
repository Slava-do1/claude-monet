// ===== COMMON.JS =====
// Общие скрипты для всех страниц Claude Monet

(function() {
    'use strict';

    // ==========================================
    // 1. ВЫПЛЫВАЮЩЕЕ МЕНЮ КОНТАКТОВ
    // ==========================================
    var menuToggle = document.getElementById('menuToggle');
    var menuContent = document.getElementById('menuContent');

    if (menuToggle && menuContent) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            menuContent.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            var menu = document.querySelector('.floating-menu');
            if (menu && !menu.contains(e.target)) {
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                if (menuContent) {
                    menuContent.classList.remove('active');
                }
            }
        });

        var contactLinks = document.querySelectorAll('.contact-link');
        for (var i = 0; i < contactLinks.length; i++) {
            var link = contactLinks[i];
            link.addEventListener('click', function() {
                setTimeout(function() {
                    if (menuToggle) {
                        menuToggle.classList.remove('active');
                    }
                    if (menuContent) {
                        menuContent.classList.remove('active');
                    }
                }, 300);
            });
        }
    }

    // ==========================================
    // 2. ПЛАВНОЕ ПОЯВЛЕНИЕ ПРИ СКРОЛЛЕ
    // ==========================================
    var fadeElements = document.querySelectorAll('.fade-section');

    function revealOnScroll() {
        var windowHeight = window.innerHeight;
        var threshold = 100;

        for (var i = 0; i < fadeElements.length; i++) {
            var el = fadeElements[i];
            var rect = el.getBoundingClientRect();
            var isVisible = rect.top < windowHeight - threshold && rect.bottom > 0;

            if (isVisible) {
                el.classList.add('visible');
            }
        }
    }

    window.addEventListener('load', function() {
        setTimeout(revealOnScroll, 200);
    });

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('resize', revealOnScroll);

    // ==========================================
    // 3. ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
    // ==========================================
    var navLinks = document.querySelectorAll('.nav a');
    for (var j = 0; j < navLinks.length; j++) {
        var link = navLinks[j];
        link.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    var offset = 80;
                    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: top, behavior: 'smooth' });
                }
            }
        });
    }

    // ==========================================
    // 4. АКТИВНАЯ СТРАНИЦА В МЕНЮ
    // ==========================================
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinksAll = document.querySelectorAll('.nav a');
    for (var k = 0; k < navLinksAll.length; k++) {
        var navLink = navLinksAll[k];
        var href = navLink.getAttribute('href');
        if (href === currentPage) {
            navLink.classList.add('active');
            break;
        }
    }

    console.log('🍽️ Claude Monet — сайт загружен!');
})();