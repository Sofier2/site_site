
document.addEventListener('DOMContentLoaded', function () {
    const backTopButton = document.getElementById('back-top');

    // Показати/сховати кнопку вгору
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            backTopButton.style.display = 'block'; // Показати кнопку
        } else {
            backTopButton.style.display = 'none'; // Сховати кнопку
        }
    });

    // Додати обробник події для кнопки вгору
    backTopButton.addEventListener('click', function () {
        // Анімація прокрутки вгору
        scrollToTop(1200); // Задайте тривалість анімації в мілісекундах
    });

    // Функція для прокрутки вгору
    function scrollToTop(duration) {
        const start = window.scrollY;
        const startTime = performance.now();

        function animation(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1); // Нормалізуйте прогрес

            // Лінійна інтерполяція
            window.scrollTo(0, start * (1 - progress));

            if (elapsed < duration) {
                requestAnimationFrame(animation); // Продовжувати анімацію
            }
        }

        requestAnimationFrame(animation); // Запустити анімацію
    }
});






