' use strict '

//********GLOBALS**********

let locationArray = []; // Empty location array to allow me to push each city variable along with their max, min & average times 

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 
// Array has been created called hoursOpen to represent all hours open ending at 7pm.

//*********Entrance into DOM WINDOW element with ID has been created in sales.html********/

let table = document.getElementById('Locations'); // 

// Variable created called table that grabs the element ID within the sales.html and allows to manipulate our CSS & HTML through JS

// let locationtablebody = document.querySelector('tbody');

// let locationtablehead = document.querySelector('thead');

// let locationtablefoot = document.querySelector('tfoot');

//console.dir(locationSection);

// Variable created for each city. including their values for Max,Min & Avg cookies sold per hour

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6)


locationArray.push(seattle, tokyo, dubai, paris, lima);
//locationArray created to push data stored inside each variable into our empty location array.




//******** HELPER FUNCTIONS / UTILITIES*******/

//Function created to give a Random total by taking the Min and the Max in as the first two parameters, The function created will then use Math.floor which roudns down and returns the largest integer less than or equal to a given number, The Function then uses Math.Random to generate a random number and multiplies this random number by the Min - Max + 1 for that particular city and then adds 1 to it at the end. 


function randomTotal(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//*********CONSTRUCTOR FUNCTION**********/

// This constructor function has been created to take in the name, min, max and average by taking in each property it will then use .this to reference your global object display it back to you.
function Location(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
}

//**********PROTOTYPE METHODS*********/

//Each prototype method that has been created allows the user to add properties and methods to an object in this instance of 'Location.' & .prototype paired with you function names allows you to add your values TO the constructor function.

Location.prototype.getrandomcustomer = function () {
  // got from MDN docs
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

// function has been created to give you a random a number. Math.floor rounds a number down to the nearest integer, then my function uses Math.random to give you a random number and takes that number and multiplies Max customers - min Customers + 1 and then adds min customer again to that total that you recieved from MaxCust - minCustomer + 1 * the random number you recieved.

Location.prototype.getcookiesale = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
    this.cookiesBought.push(Math.ceil(avgCookieBought));
    this.total += Math.ceil(avgCookieBought);  
  }

  // Location.prototype is allowing me to add getcookiessale into my constructor function, we then declare a for loop that states we will start at 0 and if 0 is less than the length of your array called hoursOpen, and if so increment by 1. We then create an variable called avg cookies bought and to get that number we utilize this.getrandomcustomer to take our value 
  Location.prototype.render = function () {
    let tableOneElem = document.createElement('tr');
    // here youre creating a tableOne element this represents the entire table then you are documenting.createElement and passing through a string of tr to represent table row. 
    table.appendChild(tableOneElem);
// here you are appending the table one element to your page.
    let storeElem = document.createElement('td');
    storeElem.textContent = this.name;
    tableOneElem.appendChild(storeElem);

    for (let i = 0; i < hoursOpen.length; i++) {
      let liElem = document.createElement('td');
      liElem.textContent = this.cookiesBought[i];
      tableOneElem.appendChild(liElem);
    }

  let liElem = document.createElement('td')
  liElem.textContent = this.total;
  tableOneElem.appendChild(liElem);
  };
};

function makeHeader() {
  let thead = document.querySelector('thead');
  let headerRow = document.createElement('tr');
  thead.appendChild(headerRow);

  let firstCell = document.createElement('td');
  headerRow.appendChild(firstCell);

  for (let i = 0; i < hoursOpen.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = hoursOpen[i];
    headerRow.appendChild(headerCell);
  }
  let lastCell = document.createElement('th');
  lastCell.textContent = 'DAILY TOTALS';
  headerRow.appendChild(lastCell);
}


makeHeader(); // invoked my makeHeader function.

function makeFooter() {
  let tfoot = document.querySelector('tfoot'); // returns the first Element within the doc that matches its specified selector, in our case the tfoot.
  let footerRow = document.createElement('tr'); 
  //specifies the tr and creates a table footer.
  tfoot.appendChild(footerRow); // here you are appending or adding to table footer to table row.

  let firstCell = document.createElement('td');

  footerRow.appendChild(firstCell);

  firstCell.textContent = 'Grand Total';

  let grandTotal = 0

  for (let i = 0; i < hoursOpen.length; i++) {
    let hourlyTotal = 0
    for (let j = 0; j < locationArray.length; j++) {
      let cookieNum = locationArray[j].cookiesBought[i];
      hourlyTotal = hourlyTotal + cookieNum 
      console.log('hourly total', hourlyTotal)
    }
    grandTotal = grandTotal + hourlyTotal;
    console.log('grand total', grandTotal);

    let footerCell = document.createElement('th');
    footerCell.textContent = hourlyTotal;
    footerRow.appendChild(footerCell);
  }
  let lastCell = document.createElement('th');
  lastCell.textContent = grandTotal;
  footerRow.appendChild(lastCell);
}

function renderAll() {
  for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].getcookiesale();
    locationArray[i].render();
  }
  
  let myform = document.getElementById('my-form');

  function handleSubmit(event) {
  event.preventDefault();

  console.log('for submitted');

  let name = event.target.userName.value;


  let minCust = parseInt(event.target.minCust.value);


  let maxCust = parseInt(event.target.maxCust.value);


  let avgCookieBought = parseFloat(event.target.avgCookieBought.value);
  //console.log(name, minCust, maxCust, avgCookieBought);
  console.log(minCust);
  console.log(maxCust);
  console.log(avgCookieBought);

  let newCity = new Location(name, minCust, maxCust, avgCookieBought);
  locationArray.push(newCity);
  newCity.getcookiesale();
  newCity.render();
  let tfoot = document.querySelector('tfoot');
  tfoot.innerHTML='';
  makeFooter();
}

myform.addEventListener('submit', handleSubmit);



};

renderAll(); // invoked my RenderAll function.
makeFooter(); // invoked my makeFooter function I created.


