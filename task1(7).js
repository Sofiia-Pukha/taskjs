// Для заданої сторінки знайдіть всі <h2> з класом head, 
// зробіть для них зелений колір фону
// потім серед знайдених елементів знайдіть елементи з класом inner 
// і поставте їм розмір шрифту 35px.

// Завдання виділене вставкою Task1

const heads = document.querySelectorAll('h2.head');
heads.forEach(h => {
  h.style.backgroundColor = 'green';
  const inner = h.querySelector('.inner');
  if (inner) {
    inner.style.fontSize = '35px';
  }
});
