const heading = document.querySelector('h1');
if (heading) {
  heading.style.backgroundColor = 'lightgreen';
  heading.style.fontWeight = '700';
}
const paragraphs = document.querySelectorAll('p');
if (paragraphs[1]) paragraphs[1].style.color = 'red';


if (paragraphs[2]) paragraphs[2].style.textDecoration = 'underline';