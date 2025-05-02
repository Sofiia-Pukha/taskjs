// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

function updateSize() {
  document.body.innerText = Ширина: ${window.innerWidth}, Висота: ${window.innerHeight};
}
window.addEventListener('resize', updateSize);
window.addEventListener('load', updateSize);
