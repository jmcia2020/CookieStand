// Problem Domain
// Pat’s Salmon Cookies problem domain can be found here!

// Instructions
// Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.
// 1. Each cookie stand location should have a separate render() method that creates and appends its row to the table
// 2.The header row and footer row are each created in their own stand-alone function
// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

'use strict';
console.log ('Salmon Cookies for Sale!');

FranchiseFactory.all

Franchise.prototype.render = function(){

  //Add a Table
  var franchiseTable = document.getElementById('');
  var cityRow =document.createElement('tr');
  // create element 
 
  //append row
  franchiseTable

};
// Grab the Parent Element
// create the child elements article, h2, p, ul, li, cookiesPerHour, custPerHour
var parentElement = document.getElementById('storeID');
// 

function FranchiseFactory(storeID, city, minCustHour, maxCustHour, avgCookieSale){


}
var newFranchise = [storeOne, storeTwo, storeThree, storeFour, storeFive];
console.log(newFranchise);


// storeOne = {
//   city: 'Seattle',
//   minCustHour: 23,
//   maxCustHour: 65,
//   avgCookieSale: 6.3,
//   cookiesPerHour: [],
//   custPerHour: [],
//   totalCookies: 0

// Problem Domain
// Pat’s Salmon Cookies problem domain can be found here!

// Instructions
// Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

'use strict';
console.log ('Salmon Cookies for Sale!');

Store.prototype.render = function(){

  //Add a Table
  var franciseTable = document.getElementById('');
  var cityRow =document.createElement('tr');
  // create element 
 
  //append row
  franchiseTable

};
// Grab the Parent Element
// create the child elements article, h2, p, ul, li, cookiesPerHour, custPerHour
var parentElement.document.getElementById('storeID');
appendChild(article);

function FranchiseFactory(storeID, city, minCustHour, maxCustHour, avgCookieSale, cookiesPerHour, custPerHour, totalCookies)

var newFranchise = [storeOne, storeTwo, storeThree, storeFour, storeFive]


// storeOne = {
//   city: 'Seattle',
//   minCustHour: 23,
//   maxCustHour: 65,
//   avgCookieSale: 6.3,
//   cookiesPerHour: [],
//   custPerHour: [],




// Problem Domain
// Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.
// Pat's Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
      // console.log('what is this ?',this.totalCookies);
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    //render object literal to the page
    var parentElementSection = document.getElementById('storeOne');
    var unorderedUL  = document.createElement('ul');
    parentElementSection.appendChild(unorderedUL);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      //update li text content
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      unorderedUL.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    unorderedUL.appendChild(listItem);
  }
};
storeOne.render();
// second store -----------
var storeTwo = {
  city: 'Tokyo',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookieSale: 1.2,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeTwo');
    var unorderedUL = document.createElement('ul');
    parentElementSection.appendChild(unorderedUL);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      unorderedUL.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    unorderedUL.appendChild(listItem);
  }
};
storeTwo.render();

// third store ---------
var storeThree = {
  city: 'Dubai',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookieSale: 3.7,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeThree');
    var ul = document.createElement('ul');
    parentElementSection.appendChild(ul);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    ul.appendChild(listItem);
  }
};
storeThree.render();

// fourth store ----------
var storeFour = {
  city: 'Paris',
  minCustHour: 20,
  maxCustHour: 38,
  avgCookieSale: 2.3,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeFour');
    var ul = document.createElement('ul');
    parentElementSection.appendChild(ul);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    ul.appendChild(listItem);
  }
};
storeFour.render();

// fifth store Five
var storeFive = {
  city: 'Lima',
  minCustHour: 2,
  maxCustHour: 16,
  avgCookieSale: 4.6,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeFive');
    var ul = document.createElement('ul');
    parentElementSection.appendChild(ul);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    ul.appendChild(listItem);
  }
};
// storeFive.render();

//
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Problem Domain
// Your friend Pat has come up with a business idea by combining two signature Seattle icons: Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon that has just a hint of fishy goodness.
// Pat's Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
      // console.log('what is this ?',this.totalCookies);
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    //render object literal to the page
    var parentElementSection = document.getElementById('storeOne');
    var unorderedUL  = document.createElement('ul');
    parentElementSection.appendChild(unorderedUL);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      //update li text content
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      unorderedUL.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    unorderedUL.appendChild(listItem);
  }
};
storeOne.render();
// second store -----------
var storeTwo = {
  city: 'Tokyo',
  minCustHour: 3,
  maxCustHour: 24,
  avgCookieSale: 1.2,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeTwo');
    var unorderedUL = document.createElement('ul');
    parentElementSection.appendChild(unorderedUL);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      unorderedUL.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    unorderedUL.appendChild(listItem);
  }
};
storeTwo.render();

// third store ---------
var storeThree = {
  city: 'Dubai',
  minCustHour: 11,
  maxCustHour: 38,
  avgCookieSale: 3.7,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeThree');
    var ul = document.createElement('ul');
    parentElementSection.appendChild(ul);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    ul.appendChild(listItem);
  }
};
storeThree.render();

// fourth store ----------
var storeFour = {
  city: 'Paris',
  minCustHour: 20,
  maxCustHour: 38,
  avgCookieSale: 2.3,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeFour');
    var ul = document.createElement('ul');
    parentElementSection.appendChild(ul);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    ul.appendChild(listItem);
  }
};
storeFour.render();

// fifth store Five
var storeFive = {
  city: 'Lima',
  minCustHour: 2,
  maxCustHour: 16,
  avgCookieSale: 4.6,
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
      var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
      this.cookiesPerHour.push(oneHour);
      this.totalCookies += oneHour;
    }
  }, //closes calcCookiesPerHour function
  render(){
    this.calcCookiesPerHour();
    var parentElementSection = document.getElementById('storeFive');
    var ul = document.createElement('ul');
    parentElementSection.appendChild(ul);
    for(var i = 0; i < hourOfOp.length; i++){
      var listItem = document.createElement('li');
      listItem.textContent = hourOfOp[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
      ul.appendChild(listItem);
    }
    listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalCookies + ' cookies.';
    ul.appendChild(listItem);
  }
};
storeFive.render();

//
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
