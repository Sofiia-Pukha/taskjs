const list = document.getElementById('list');
const items = Array.from(list.children).filter(el => el.tagName === 'LI');

if (items.length > 0) {
  console.log(items[0]);                       
  if (items.length > 1) console.log(items[items.length - 1]); 
  if (items.length > 2) console.log(items[1]);  
  if (items.length > 3) console.log(items[2]);  
  if (items.length > 4) console.log(items[3]);  
}