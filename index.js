// ===== INDEX.JS =====
// Скрипты для главной страницы Claude Monet

(function() {
    'use strict';

    console.log('🏠 Главная страница Claude Monet загружена');

    // Эффект при наведении на карточки популярных блюд
    var popularItems = document.querySelectorAll('.popular-item');
    for (var i = 0; i < popularItems.length; i++) {
        var item = popularItems[i];
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    }
})();