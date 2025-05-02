// Знайдіть теги <div>, які стоять безпосередньо після <h3> 
// і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.

// Завдання виділене вставкою Task3

const h3s = document.querySelectorAll('h3');
h3s.forEach(h3 => {
  const next = h3.nextElementSibling;
  if (next && next.tagName === 'DIV') {
    h3.parentNode.insertBefore(next, h3);
  }
});
