'use strict';
console.log ('Salmon Cookies for Sale!');
var hourOfOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
//Grabs the table in html
// var tableElement = document.getElementById('franchiseTable');
// console.log(tableElement);
var tableBodyElement = document.getElementById('tbody');

function FranchiseFactory(storeID, city, minCustHour, maxCustHour, avgCookieSale){
  this.storeId = storeID;
  this.city = city;
  this.minCustHour = minCustHour;
  this.maxCustHour = maxCustHour;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  this.custPerHour = [];
  this.totalCookies = 0;
  FranchiseFactory.allFranchises.push(this);
}

// calculate Customers
FranchiseFactory.prototype.hourlyCust = function(){
  for (var i = 0; i < hourOfOp.length; i++) {
    this.custPerHour.push(random(this.minCustHour,this.maxCustHour));
  }
};
//calculate Cookies base on customer count
FranchiseFactory.prototype.calcCookiesPerHour = function(){
  //calc the customer
  this.hourlyCust();
  //then we can calc the cookies based on new customer count
  for (var i = 0; i < hourOfOp.length; i++) {
    var oneHour = Math.ceil(this.custPerHour[i] * this.avgCookieSale);
    this.cookiesPerHour.push(oneHour);
    this.totalCookies += oneHour;
  }
};


FranchiseFactory.prototype.render = function(){
  this.calcCookiesPerHour();
  console.log('this is the render function');

  var tableRow = document.createElement('tr');
  var tableDataElement = document.createElement('td');

  tableDataElement.textContent = this.city;

  tableRow.appendChild(tableDataElement);
  for (var i =0; i < hourOfOp.length; i++) {
    tableDataElement = document.createElement('td');
    tableDataElement.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(tableDataElement);
  }

  var tableHeader = document.createElement('td');
  tableHeader.textContent = this.totalCookies;
  tableRow.appendChild(tableHeader);
  tableBodyElement.appendChild(tableRow);
};

FranchiseFactory.allFranchises = [];


function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



// CREATING THE Footer

function makeFooterRow() {
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = 'Hourly Sales by Location';
  tableRow.appendChild(tableHeader);
  var dailyCookiesSold = 0;
  var hourlyCookiesSold = 0;
  for (var i =0; i < hourOfOp.length; i++) {
    dailyCookiesSold = 0;
    for (var j = 0; j < FranchiseFactory.allFranchises.length; j++){
      hourlyCookiesSold += FranchiseFactory.allFranchises[j].cookiesPerHour[i];
      dailyCookiesSold += FranchiseFactory.allFranchises[j].cookiesPerHour[i];
    } //This closes the first for loop.
    tableHeader = document.createElement('th');
    tableHeader.textContent = dailyCookiesSold;
    tableRow.appendChild(tableHeader);
  } //This closes the next for loop.
  tableHeader = document.createElement('th');
  tableHeader.textContent = hourlyCookiesSold;
  tableRow.appendChild(tableHeader);
  tableBodyElement.appendChild(tableRow);

} //This closes the function.


//IIFE
FranchiseFactory.renderTable = function(){
// makeheaderRow(); in html

  var tBody = document.getElementById('tbody');
  tBody.innerHTML = '';

  for(var i = 0; i < FranchiseFactory.allFranchises.length; i++){
    FranchiseFactory.allFranchises[i].render();
  }
  makeFooterRow();

};
new FranchiseFactory('storeOne', 'Seattle', 23, 65, 6.3);
new FranchiseFactory('storeTwo', 'Tokyo', 3, 24, 1.2);
new FranchiseFactory('storeThree', 'Dubai', 11, 38, 3.7);
new FranchiseFactory('storeFour', 'Paris', 20, 38, 2.3);
new FranchiseFactory('storeFive', 'Lima', 2, 16, 4.6);


FranchiseFactory.renderTable();

// CREATE FORM


//RENDER INFORMATION TO THE FORM

function handleFormSubmitted(event){ //opens handleFormSubmitted function
  event.preventDefault();
  console.log(event);

  var storeIDInput = document.getElementById('storeID');
  console.log (storeIDInput);

  var storeIDValue = storeIDInput['value'];
  console.log(storeIDInput['value']);
  console.log(storeIDValue);

  var cityInput = document.getElementById('city');
  var cityValue = cityInput['value'];
  console.log(cityValue);

  var minCustHourInput = document.getElementById('minCustHour');
  var minCustHourValue = minCustHourInput['value'];
  console.log(minCustHourInput.value);

  var maxCustHourInput = document.getElementById('maxCustHour');
  var maxCustHourValue = maxCustHourInput.value;
  console.log(maxCustHourValue);

  var avgCookieSaleInput = document.getElementById('avgCookieSale');
  console.log('we are looking for this',typeof(avgCookieSaleInput.value));
  var avgCookieSaleValue = avgCookieSaleInput.value;
  console.log(avgCookieSaleValue);

  var newCookieStore = new FranchiseFactory(storeIDValue, cityValue, minCustHourValue, maxCustHourValue, avgCookieSaleValue);

  console.log('Opening now in', newCookieStore);
  FranchiseFactory.renderTable();



  var form = document.getElementById('newCookieStore');
  form.reset();

}
var formElement = document.getElementById('newCookieStore');
formElement.addEventListener('submit',handleFormSubmitted);
