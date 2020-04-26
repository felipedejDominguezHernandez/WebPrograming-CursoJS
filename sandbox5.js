/*---------- Primera Parte ----------
//object literals

let user = {
    name: 'felipe',
    age: 20,
    email: 'felipede09@gmail.com',
    location: 'México',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);

console.log(user.name);

//user.age = 35;
console.log(user.age);

console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user); 

---------- Segunda Parte #1 ----------

let user = {
    name: 'felipe',
    age: 20,
    email: 'felipede09@gmail.com',
    location: 'México',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){

    }
};

user.login();
user.logout();

const name = 'Felipe';
name.toUpperCase();

---------- Segunda Parte #2 ----------

//const blogs = [
//    { title: 'why mac & cheese rules', likes: 30},
//    { title: '10 things to make with marmite', likes: 50}
//];

//console.log(blogs);

let user = {
    name: 'felipe',
    age: 20,
    email: 'felipede09@gmail.com',
    location: 'México',
    blogs: [{ title: 'why mac & cheese rules', likes: 30},
            { title: '10 things to make with marmite', likes: 50}
        ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();
console.log(this); 

---------- Segunda Parte #3 ----------
//Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 6.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));


---------- Segunda Parte #4 ----------*/

//primitive values

//let scoreOne = 50;
//let scoreTwo = scoreOne;

//console.log(`ScoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


//scoreOne = 100;

//console.log(`ScoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values


const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);

//userOne.age = 40;
//userTwo.age = 40;
userOne.name = 'Chun-li';
console.log(userOne, userTwo);