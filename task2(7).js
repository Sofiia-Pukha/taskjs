// На HTML-сторінці є посилання <a>. У випадку коли, 
// href починається на https://,
// потрібно додати посиланню атрибут target="_blank".

// Завдання виділене вставкою Task2

const links = document.querySelectorAll('a[href^="https://"]');
links.forEach(link => link.setAttribute('target', '_blank'));
