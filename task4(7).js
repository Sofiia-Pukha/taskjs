// На HTML-сторінці є 6 чекбоксів. 
// Напишіть скріпт, який після того, 
// як користувач позначив будь-які 3 чекбокси,
// всі чекбокси робить неактивними.

// Завдання виділене вставкою Task4

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedCount = 0;

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    checkedCount = Array.from(checkboxes).filter(c => c.checked).length;
    if (checkedCount >= 3) {
      checkboxes.forEach(c => c.disabled = true);
    }
  });
});
