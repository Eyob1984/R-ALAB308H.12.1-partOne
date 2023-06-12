//9. Copy the following data structure to the top of index.js:
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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

// R_ALAB 308H.13.1 - DOM Manuipulation (Part Two)

//1.  Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl. 
const subMenuEl = document.querySelectorAll('#sub-menu')

//2. Set the height subMenuEl element to be 100%.
subMenuEl[0].style.height = '100%';

//3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl[0].style.backgroundColor = 'var(--sub-menu-bg)'

//4. Add the class of flex-around to the subMenuEl element.
subMenuEl[0].classList.add('flex-around')

//5. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl[0].style.position = 'absolute'

//6. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl[0].style.top = 0;

//8. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
  const topMenuLinks = document.getElementById('top-menu').getElementsByTagName('a')
console.log('Top', topMenuLinks)
// 9. Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

let subLinks = [];
//10. Attach a delegated 'click' event listener to topMenuEl.
const helperFunction =  (e) => {
  e.preventDefault();
  
  Array.from([...topMenuLinks]).forEach((ele,) => {
    ele.classList.remove('active');

  })

  menuLinks.forEach((ele) => {
    if(ele.subLinks) {
      console.log('sub2', ele.subLinks,)
      subLinks.push(ele.subLinks)
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
  })
  const buildSubMenu = (arr) => {
    console.log('sub', subMenuEl)
    let i = 0;
    arr.forEach((ele) => {
      const anchor = document.createElement('a')
      console.log('anchor', ele[i])
      anchor.href = ele[i].href;
      anchor.textContent = ele[i].text;
      document.querySelectorAll('#sub-menu').appendChild(anchor);
      i++
    })
  }
  buildSubMenu(subLinks)
  if(!e.target.matches('A')) {
    return ''
  } else {
    console.log(e.target.textContent)
    e.target.classList.add('active') 
    console.log(document.getElementById('top-menu').getElementsByTagName('a') )
    showingSubMenu = false;
    subMenuEl[0].style.top = 0;
    return
  }

 
}
  topMenuEl.addEventListener('click', helperFunction)



  console.log('sub', subLinks)

  console.log('menulinks', menuLinks)


