'use strict';
console.log ('Salmon Cookies for Sale!');
var hourOfOp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
//Grabs the table in html
var tableElement = document.getElementById('franchiseTable');
// console.log(tableElement);

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

//calculate Customers
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



//Run the render 
FranchiseFactory.prototype.render = function(){
  this.calcCookiesPerHour();
  console.log('this is the render function');
};







FranchiseFactory.allFranchises = [];

new FranchiseFactory('Seattle', 23, 65, 6.3);
new FranchiseFactory('Tokyo', 3, 24, 1.2);
new FranchiseFactory('Dubai', 11, 38, 3.7);
new FranchiseFactory('Paris', 20, 38, 2.3);
new FranchiseFactory('Lima', 2, 16, 4.6);
//runs random for object methods above
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}





// function makeFooterRow() {
//   //This is in the video.
//   console.log('makeFooterRow');
// }



//IIFE
(function renderTable(){
// makeheaderRow(); in html
  for(var i = 0; i < hourOfOp.length; i++){
    FranchiseFactory.allFranchises[i].render();
  }
  // makeFooterRow();

})();
