// Problem Domain
// Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.
// Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:
// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// //OBJECT LITERAL
'use strict';

// Store hours: Opens 6am, Closes 7pm 
var hourOfOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
console.log('Show me hours of operation: ',hourOfOp);


var storeOne = {
  city: 'Seattle',
  minCustHour: 23,
  maxCustHour: 65,
  avgCookieSale: 6.3,
  cookiesPerHour: [],
  custPerHour: [],
  totalCookies: 0,


  hourlyCust: function (){
    for (var i = 0; i < hourOfOp.length; i++) {
    this.custPerHour.push(random(this.minCustHour,this.maxCustHour));  
    } 
  
  }, //closes hourlyCust function

  calcCookiesPerHour: function(){
    this.hourlyCust();
    for (var i = 0; i < hourOfOp.length; i++) {
          //Create a variable to hold the cookies each hour
      this.cookiesPerHour.push();
         //this where we will keep running total of cookies.
    }  
  }, //closes calcCookiesPerHour function

  render(){
    this.calcCookiesPerHour();
       //render object literal to the page
  }
};

storeOne.render();
// second store -----------

// var storeTwo = {
//   city: 'Tokyo',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookieSale: 1.2,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };

hourlyCust: function (){
  for (var i = 0; i < hourOfOp.length; i++) {
  this.custPerHour.push(random(this.minCustHour,this.maxCustHour));  
  } 

}, //closes hourlyCust function

calcCookiesPerHour: function(){
  this.hourlyCust();
  for (var i = 0; i < hourOfOp.length; i++) {
    //Create a variable to hold the cookies each hour
    this.cookiesPerHour.push();
    //this where we will keep running total of cookies.
  }
}

// var storeThree = {
//   city: 'Dubai',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookieSale: 3.7,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };

// var storeFour = {
//   city: 'Paris',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookieSale: 2.3,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };

// var storeFour = {
//   city: 'Lima',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookieSale: 4.6,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0
// };

function random(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
};

  //CREATE DOM ELEMENTS and RENDER in HTML

  //create a new element the parent element of the child element that we will create to render the pet article in the html

// var parentElement = document.getElementById('Stores');
// console.log(parentElement);

<section></section>
// create <section>
var section = document.getElementById('storeOne');
console.log(section)
parentElement.appendChild(body);

<ul></ul>
// Create ul
var ul = document.createElement('ul');
ul.textContent = city.name;
console.log (ul);

ul.appendChild(section);

<li> </li>
// // Create <article>
// var article = document.createElement('article');
// // console.log(article);
// parentElement.appendChild(article);

// // <h2></h2>
// // Create h2
// var h2 = document.createElement('h2');
// h2.textContent = petOne.name;
// console.log(h2);
// article.appendChild(h2);

// // <p></p>
// var petPara = document.createElement('p');
// petPara.textContent = 'Cats are adorable, and this cat is ' + petOne.age + ' old.';
// article.appendChild(petPara);

// // 


// for(var i = 0; i < petOne.interests.length; i++){
//   var petLi = document.createElement('li');
//   console.log(petLi);
//   petLi.textContent = petOne.interests[i];
//   // console.log(petLi);
//   petUl.appendChild(petLi);
// }
// //   <li></li>
// // </ul>



// //add image pet One.
// var petOneImg = document.createElement('img');
// console.log(petOneImg);
// petOneImg.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
// petOneImg.setAttribute('alt', 'Cute kitty huh? Adopt kitty Now!');
// article.appendChild(petOneImg);



// // <img />
// // </article> 