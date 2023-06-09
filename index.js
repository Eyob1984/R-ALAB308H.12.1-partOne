//9. Copy the following data structure to the top of index.js:
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.getElementsByTagName('main')

//2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

//3.Set the content of mainEl to <h1>DOM Manipulation</h1>.
const heading = document.createElement('h1');
heading.textContent = ('DOM Manipulation')
mainEl[0].appendChild(heading)

//4.Add a class of flex-ctr to mainEl.
mainEl[0].classList.add('flex-ctr')

//5. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu')

//6. Set the height topMenuEl element to be 100%.
topMenuEl.style.height = '100%'

//7. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.background = 'var(--top-menu-bg)'

//8. Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around')
console.log(topMenuEl)

//10. Iterate over the entire menuLinks array and for each "link" object:

menuLinks.forEach((ele) => {
  //11. Create an <a> element.
  const anchor = document.createElement('a');
  //12. On the new element, add an href attribute with its value set to the href property of the "link" object.
  anchor.href = ele.href;
  //13. Set the new element's content to the value of the text property of the "link" object.
  anchor.textContent = ele.text;
  //14. Append the new element to the topMenuEl element.
  topMenuEl.appendChild(anchor)
})