/* ----------- Primero ejemplo -----------
let age = 25;
let year = 2010;
console.log(age, year);

// log things to console
age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

----------- Segundo ejemplo -----------
//strings
console.log('hello, world');

let email = 'felipede09@gmail.com';
console.log(email);

//string concatenation
let firstName = 'Felipe';
let lastName = 'Dominguez';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

----------- Tercero ejemplo -----------
// Common string methods

let email = 'felipede09@gmail.com';

//let result = email.lastIndexOf('m');

//let result = email.slice(2,8);

//let result = email.substr(4,10);

//let result = email.replace('f', 'w');

//let result = email.replace('d', 'h');

console.log(result);

----------- Cuarto ejemplo -----------

let radius = 10;
const pi = 3.1416;

//console.log(radius, pi);

//math operators +, -, *, /, **, %
//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2;

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// Nan - not a number

//console.log(5/'hello');
//console.log(5 * 'hellow');

let result = 'the blog has' + likes + 'likes';
console.log(result);

----------- Quinto ejemplo -----------

//template strings
const title = 'Best reads of 2019';
const author = 'Felipe';
const likes = 30;

//concatenation way

//let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes';
//console.log(result);

//template string way

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

//creating html templates

let html = `<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);


----------- Sexto ejemplo -----------

let ninjas = ['shaun', 'ryu', 'chun-li'];

//ninjas[1] = 'ken';
//console.log(ninjas[1]);

//let ages = [20, 25, 30, 35];
//console.log(ages[2]);

//let random = ['shaun', 'crystal', 30, 20];
//console.log(random);

//console.log(ninjas.length);

//array methods
//let result = ninjas.join('-');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
let result = ninjas.push('ken');
result = ninjas.pop();

console.log(result);

----------- Sexto ejemplo -----------

let age = null;

console.log(age, age + 3, `the age is ${age}`);


----------- Sexto ejemplo -----------

//booleans & comparisons
console.log(true, false, "true", "false");


//methods can return booleans

let email = 'felipede09@gmail.com';
let names = ['Felipe', 'Luis', 'Joaquin'];

//let result = email.includes('!');
//let result = names.includes('bowser');

//console.log(result);


//comparison operators

let age = 20;

//console.log(ege == 20);
//console.log(ege == 25);
//console.log(ege != 21);
//console.log(ege > 19);
//console.log(ege < 19);
//console.log(ege <= 20);
//console.log(ege >= 20);

let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'shaun');
console.log(name > 'crystal');
console.log(name > 'shaun');


----------- Septimo ejemplo ----------

let age = 20;


//lo0se comparation (diferent types can still be equal)

//console.log(age == 20);
//console.log(age == '20');
//console.log(age != 21);
//console.log(age != '20');


//strict comparison (deferent types cannot be equal)

console.log(age === 20);
console.log(age === '20');
console.log(age === 20);
console.log(age !== 20);
console.log(age !== '20');


----------- Octavo ejemplo ----------*/

let score = '100';

//score = Number(score);
//console.log(score + 1);
//console.log(typeof score);

//let result = Number('hello');
//console.log(result);

//let result = String(50);
//console.log(result, typeof result);

//let result = Boolean(0);
let result = Boolean('0');
console.log(result, typeof result);

