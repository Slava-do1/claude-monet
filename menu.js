// ===== MENU.JS =====
// Скрипты для страницы меню Claude Monet

(function() {
    'use strict';

    console.log('📋 Страница меню Claude Monet загружена');

    // ===== ФИЛЬТРАЦИЯ ПО КАТЕГОРИЯМ =====
    var categoryBtns = document.querySelectorAll('.category-btn');
    var menuCards = document.querySelectorAll('.menu-card');

    // Функция фильтрации
    function filterMenu(category) {
        for (var i = 0; i < menuCards.length; i++) {
            var card = menuCards[i];
            var cardCategory = card.getAttribute('data-category');

            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    }

    // Обработчики на кнопки категорий
    for (var j = 0; j < categoryBtns.length; j++) {
        var btn = categoryBtns[j];
        btn.addEventListener('click', function() {
            // Убираем active у всех кнопок
            for (var k = 0; k < categoryBtns.length; k++) {
                categoryBtns[k].classList.remove('active');
            }
            // Добавляем active текущей
            this.classList.add('active');

            // Получаем категорию
            var category = this.getAttribute('data-category');
            filterMenu(category);
        });
    }

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
    // ===== ФОРМА БРОНИРОВАНИЯ =====
var bookingForm = document.getElementById('bookingForm');
var bookingMessage = document.getElementById('bookingMessage');

if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var guests = document.getElementById('guests').value;
        var comment = document.getElementById('comment').value.trim();

        if (!name || !phone || !date || !time) {
            bookingMessage.textContent = '❌ Пожалуйста, заполните все обязательные поля';
            bookingMessage.className = 'booking-message error';
            return;
        }

        // Имитация отправки (замени на реальный запрос)
        bookingMessage.textContent = '✅ Спасибо! Мы свяжемся с вами в ближайшее время.';
        bookingMessage.className = 'booking-message success';

        // Очистка формы
        this.reset();

        // Прокрутка к сообщению
        bookingMessage.scrollIntoView({ behavior: 'smooth' });
    });
}
})();