// 1. Находим элементы в DOM по их ID и классам
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdown_menu');
const dropdownItems = document.querySelectorAll('.dropdown__sort-item');

// 2. Открытие / закрытие дропдауна по клику на кнопку
dropdownButton.addEventListener('click', function (e) {
    e.stopPropagation(); // Предотвращаем закрытие при клике на саму кнопку
    dropdownMenu.classList.toggle('dropdown__sort-menu--open');
});

// 3. Выбор элемента из списка
dropdownItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.stopPropagation();
        
        // Удаляем активный класс у старого элемента
        const activeItem = dropdownMenu.querySelector('.dropdown__sort-item--active');
        if (activeItem) {
            activeItem.classList.remove('dropdown__sort-item--active');
        }
        
        // Добавляем активный класс кликнутому элементу
        this.classList.add('dropdown__sort-item--active');
        
        // Меняем текст в кнопке (сохраняя SVG-стрелочку внутри)
        const textNode = dropdownButton.firstChild;
        textNode.textContent = this.textContent + ' ';
        
        // Закрываем меню после выбора
        dropdownMenu.classList.remove('dropdown__sort-menu--open');
        
        // Получаем значение выбранного пункта (для отправки на сервер/сортировки)
        const selectedValue = this.getAttribute('data-value');
        console.log('Выбран тип сортировки:', selectedValue);
    });
});

// 4. Закрытие дропдауна при клике в любое другое место страницы
document.addEventListener('click', function () {
    dropdownMenu.classList.remove('dropdown__sort-menu--open');
});