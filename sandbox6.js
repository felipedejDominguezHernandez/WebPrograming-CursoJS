/*---------- Primera Parte ----------

//const para = document.querySelector('body > h1');

//console.log(para);

const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('error');

console.log(paras[2]);


---------- Segunda Parte ----------

//get an element by ID
//const title = document.getElementById('page-title');
//console.log(title);

//get elements by their class name
//const errors = document.getElementsByClassName('error');
//console.log(errors);
//console.log(errors[0])

//get elements by their tag name

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);


---------- Tercera Parte ----------

const para = document.querySelector('p');

//console.log(para.innerText);
para.innerText = 'ninjas are awesome!';

const paras = document.querySelectorAll('p');

//paras.forEach(para => {
//    console.log(para.innerText);
//    para.innerText += 'new text';
//});

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

const people = ['Felipe', 'Jesús', 'yoshi'];
people.forEach(person => {
content.innerHTML += `<p>${person}</p>`;
});


---------- Cuarta Parte ----------

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.felipede09@gmail.com');
link.innerText = 'The Net Ninja website';
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green');


---------- Quinta Parte ----------

const Title = document.querySelector('h1');
//title.setAttribute('style', 'margin: 50px;');
console.log(Title.style);

Title.style.margin = '50px';
Title.style.color = 'crimson';
Title.style.fontSize = '60px';
Title.style.margin = '';

---------- Sexta Parte ---------- */

//const content = document.querySelector('p');

//console.long(content.clasList);
//content.classList.add('error');
//content.classList.remove('error');
//content.classList.add('error');

const paras = document.querySelectorAll('p');
paras.forEach(p =>{
   if(p.textContent.includes('error')){
       p.classList.add('error');
   }
   if(p.innerText.includes('success')){
       p.classList.add('success');
   }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
