// ===== ABOUT.JS =====
// Скрипты для страницы "О ресторане" Claude Monet

(function() {
    'use strict';

    console.log('📖 Страница "О ресторане" Claude Monet загружена');

    // ===== КНОПКА БРОНИРОВАНИЯ =====
    var bookBtn = document.getElementById('bookBtn');
    if (bookBtn) {
        bookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert(
                'Бронирование столика в ресторане Claude Monet\n\n' +
                'Позвоните нам: +7 (499) 123-45-67\n' +
                'Или напишите: info@claudemonet.ru\n\n' +
                'Режим работы: ежедневно с 12:00 до 23:00'
            );
        });
    }

    // ===== АНИМАЦИЯ ПОЯВЛЕНИЯ СТАТИСТИКИ =====
    var stats = document.querySelectorAll('.stat-number');
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i];
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        }
    }, { threshold: 0.5 });

    for (var j = 0; j < stats.length; j++) {
        var stat = stats[j];
        stat.style.opacity = '0';
        stat.style.transform = 'scale(0.8)';
        stat.style.transition = 'all 0.6s ease';
        observer.observe(stat);
    }

})();