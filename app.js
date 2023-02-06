'use strict'

//********GLOBALS**********

let locationArray = []; // Empty location array to allow me to push each city variable along with their max, min & average times 

let hourlyTotal = [];

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; 

let table = document.getElementById('Locations'); 

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6)


locationArray.push(seattle, tokyo, dubai, paris, lima);


function randomTotal(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Location(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
}


Location.prototype.getrandomcustomer = function () {

  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};


Location.prototype.getcookiesale = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    let avgCookieBought = this.getrandomcustomer() * this.avgCookieBought;
    this.cookiesBought.push(Math.ceil(avgCookieBought));
    this.total += Math.ceil(avgCookieBought);  
  }

 
  Location.prototype.render = function () {
    let tableOneElem = document.createElement('tr');
    table.appendChild(tableOneElem);
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


makeHeader(); 

function makeFooter() {
  let tfoot = document.querySelector('tfoot');
  let footerRow = document.createElement('tr');
  tfoot.appendChild(footerRow);

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
};

renderAll();
makeFooter();


  
  let myform = document.getElementById('my-form');

  function handleSubmit(event) {
  event.preventDefault();

  console.log('for submitted');

  let name = event.target.userName.value;


  let minCust = parseInt(event.target.minCust.value);


  let maxCust = parseInt(event.target.maxCust.value);


  let avgCookieBought = parseFloat(event.target.avgCookieBought.value);
  console.log(name, minCust, maxCust, avgCookieBought);
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

function renderAll() {
  for (let i = 0; i < locationArray.length; i++) {
    locationArray[i].getcookiesale();
    locationArray[i].render();
  }
};
