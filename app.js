' use strict '

// // console.log('hi!')

// // let cities = document.getElementById('cities');

// // console.log(cities);

// let hours = ['6 a.m.', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m',]

// let seattle = {
  
//   name: 'seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesSoldEachHourArray:[],
//   dailyTotal: 0,
  
//   getNumberOfRandomCustomersPerhour: function() {
//       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//     },
  
//   generateCookiesPerHour: function() {
//     // - for each hour at each location
//     for (let i = 0; i < hours.length; i++) {
//       //- the random number of customers generated.
//       let customers = this.getNumberOfRandomCustomersPerhour();
//       // console.log(customers);
//       let cookiesSoldEachHour = Math.ceil(customers * this.avg);
      
//       this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);

//       // Calculating the sum on these hourly totatls
//       //
//       // this.dailyTotal += this.generateCookiesPerHour
      
//     }
//     for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
//       this.dailyTotal += this.cookiesSoldEachHourArray[i]
//     }
//     console.log(this.cookiesSoldEachHourArray)
//   },

//   // printCity: function(){
//   //   let citySection = document.createElement('section');
//   //   cities.appendChild(citySection);

//   //   let cityHead = document.createElement('h3');
//   //   cityHead.textContent = `${this.location}`;
//   //   citySection.appendChild(cityHead);
    
//   //   let cPH = document.createElement('ul');
//   //   citySection.append(cPH);

//   //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
//   //     let li = document.createElement('li');
//   //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
//   //     cPH.appendChild(li); 
//     // }
  
    
//     render: function() {
//       this.generateCookiesPerHour();
//       // method to rend cookies sales as a <ul>
      
//       //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
//       let salesContainer = document.getElementById('seattleSales');
//       let h2element = document.createElement('h2')
//       h2element.textContent = 'Seattle Store'
//       salesContainer.appendChild(h2element)
      
//       console.log(salesContainer)
      
//       //create a new element
//       let ulElement= document.createElement('ul');
//       // give it content 
//       // append it to the DOM
//       salesContainer.appendChild(ulElement);
      
//       for (let i = 0; i < hours.length; i++) {
        
//         // create a new element
//         let liElement = document.createElement('li');
//         liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
        
//         //append it to the DOM
//         ulElement.appendChild(liElement);
//       }
//       let totalLiElement = document.createElement('li');
      
//       totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
//       ulElement.appendChild(totalLiElement);
//     }
    
    
//   }
    
//     seattle.generateCookiesPerHour();
//     seattle.render();
    
//     let tokyo = {
  
//       name: 'tokyo',
//       min: 3,
//       max: 24,
//       avg: 1.2,
//       cookiesSoldEachHourArray:[],
//       dailyTotal: 0,
      
//       getNumberOfRandomCustomersPerhour: function() {
//           return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//         },
      
//       generateCookiesPerHour: function() {
//         // - for each hour at each location
//         for (let i = 0; i < hours.length; i++) {
//           //- the random number of customers generated.
//           let customers = this.getNumberOfRandomCustomersPerhour();
//           // console.log(customers);
//           let cookiesSoldEachHour = Math.ceil(customers * this.avg);
          
//           this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
    
//           // Calculating the sum on these hourly totatls
//           //
//           // this.dailyTotal += this.generateCookiesPerHour
          
//         }
//         for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
//           this.dailyTotal += this.cookiesSoldEachHourArray[i]
//         }
//         console.log(this.cookiesSoldEachHourArray)
//       },
    
//       // printCity: function(){
//       //   let citySection = document.createElement('section');
//       //   cities.appendChild(citySection);
    
//       //   let cityHead = document.createElement('h3');
//       //   cityHead.textContent = `${this.location}`;
//       //   citySection.appendChild(cityHead);
        
//       //   let cPH = document.createElement('ul');
//       //   citySection.append(cPH);
    
//       //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
//       //     let li = document.createElement('li');
//       //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
//       //     cPH.appendChild(li); 
//         // }
      
        
//         render: function() {
//           this.generateCookiesPerHour();
//           // method to rend cookies sales as a <ul>
          
//           //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
//           let salesContainer = document.getElementById('tokyoSales'); console.log(salesContainer)
//           let h2element = document.createElement('h2')
//           h2element.textContent = 'Tokyo store'
//           salesContainer.appendChild(h2element)
          
//           console.log(salesContainer)
          
//           //create a new element
//           let ulElement= document.createElement('ul');
//           // give it content 
//           // append it to the DOM
//           salesContainer.appendChild(ulElement);
          
//           for (let i = 0; i < hours.length; i++) {
            
//             // create a new element
//             let liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
            
//             //append it to the DOM
//             ulElement.appendChild(liElement);
//           }
//           let totalLiElement = document.createElement('li');
          
//           totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
//           ulElement.appendChild(totalLiElement);
//         }
        
        
//       }
        
//         tokyo.generateCookiesPerHour();
//         tokyo.render();
        
//         let dubai = {
  
//           name: 'dubai',
//           min: 11,
//           max: 38,
//           avg: 3.7,
//           cookiesSoldEachHourArray:[],
//           dailyTotal: 0,
          
//           getNumberOfRandomCustomersPerhour: function() {
//               return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//             },
          
//           generateCookiesPerHour: function() {
//             // - for each hour at each location
//             for (let i = 0; i < hours.length; i++) {
//               //- the random number of customers generated.
//               let customers = this.getNumberOfRandomCustomersPerhour();
//               // console.log(customers);
//               let cookiesSoldEachHour = Math.ceil(customers * this.avg);
              
//               this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
        
//               // Calculating the sum on these hourly totatls
//               //
//               // this.dailyTotal += this.generateCookiesPerHour
              
//             }
//             for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
//               this.dailyTotal += this.cookiesSoldEachHourArray[i]
//             }
//             console.log(this.cookiesSoldEachHourArray)
//           },
        
//           // printCity: function(){
//           //   let citySection = document.createElement('section');
//           //   cities.appendChild(citySection);
        
//           //   let cityHead = document.createElement('h3');
//           //   cityHead.textContent = `${this.location}`;
//           //   citySection.appendChild(cityHead);
            
//           //   let cPH = document.createElement('ul');
//           //   citySection.append(cPH);
        
//           //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
//           //     let li = document.createElement('li');
//           //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
//           //     cPH.appendChild(li); 
//             // }
          
            
//             render: function() {
//               this.generateCookiesPerHour();
//               // method to rend cookies sales as a <ul>
              
//               //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
//               let salesContainer = document.getElementById('dubaiSales'); console.log(salesContainer)
//               let h2element = document.createElement('h2')
//               h2element.textContent = 'Dubai Store'
//               salesContainer.appendChild(h2element)
              
//               console.log(salesContainer)
              
//               //create a new element
//               let ulElement= document.createElement('ul');
//               // give it content 
//               // append it to the DOM
//               salesContainer.appendChild(ulElement);
              
//               for (let i = 0; i < hours.length; i++) {
                
//                 // create a new element
//                 let liElement = document.createElement('li');
//                 liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                
//                 //append it to the DOM
//                 ulElement.appendChild(liElement);
//               }
//               let totalLiElement = document.createElement('li');
              
//               totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
//               ulElement.appendChild(totalLiElement);
//             }
            
            
//           }
            
//             dubai.generateCookiesPerHour();
//             dubai.render();

//             let paris = {
  
//               name: 'paris',
//               min: 20,
//               max: 38,
//               avg: 2.3,
//               cookiesSoldEachHourArray:[],
//               dailyTotal: 0,
              
//               getNumberOfRandomCustomersPerhour: function() {
//                   return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//                 },
              
//               generateCookiesPerHour: function() {
//                 // - for each hour at each location
//                 for (let i = 0; i < hours.length; i++) {
//                   //- the random number of customers generated.
//                   let customers = this.getNumberOfRandomCustomersPerhour();
//                   // console.log(customers);
//                   let cookiesSoldEachHour = Math.ceil(customers * this.avg);
                  
//                   this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
            
//                   // Calculating the sum on these hourly totatls
//                   //
//                   // this.dailyTotal += this.generateCookiesPerHour
                  
//                 }
//                 for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
//                   this.dailyTotal += this.cookiesSoldEachHourArray[i]
//                 }
//                 console.log(this.cookiesSoldEachHourArray)
//               },
            
//               // printCity: function(){
//               //   let citySection = document.createElement('section');
//               //   cities.appendChild(citySection);
            
//               //   let cityHead = document.createElement('h3');
//               //   cityHead.textContent = `${this.location}`;
//               //   citySection.appendChild(cityHead);
                
//               //   let cPH = document.createElement('ul');
//               //   citySection.append(cPH);
            
//               //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
//               //     let li = document.createElement('li');
//               //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
//               //     cPH.appendChild(li); 
//                 // }
              
                
//                 render: function() {
//                   this.generateCookiesPerHour();
//                   // method to rend cookies sales as a <ul>
                  
//                   //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
//                   let salesContainer = document.getElementById('parisSales'); console.log(salesContainer)
//                   let h2element = document.createElement('h2')
//                   h2element.textContent = 'Paris Store'
//                   salesContainer.appendChild(h2element)
                  
//                   console.log(salesContainer)
                  
//                   //create a new element
//                   let ulElement= document.createElement('ul');
//                   // give it content 
//                   // append it to the DOM
//                   salesContainer.appendChild(ulElement);
                  
//                   for (let i = 0; i < hours.length; i++) {
                    
//                     // create a new element
//                     let liElement = document.createElement('li');
//                     liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                    
//                     //append it to the DOM
//                     ulElement.appendChild(liElement);
//                   }
//                   let totalLiElement = document.createElement('li');
                  
//                   totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
//                   ulElement.appendChild(totalLiElement);
//                 }
                
                
//               }
                
//                 paris.generateCookiesPerHour();
//                 paris.render();

//                 let lima = {
  
//                   name: 'lima',
//                   min: 2,
//                   max: 16,
//                   avg: 4.6,
//                   cookiesSoldEachHourArray:[],
//                   dailyTotal: 0,
                  
//                   getNumberOfRandomCustomersPerhour: function() {
//                       return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//                     },
                  
//                   generateCookiesPerHour: function() {
//                     // - for each hour at each location
//                     for (let i = 0; i < hours.length; i++) {
//                       //- the random number of customers generated.
//                       let customers = this.getNumberOfRandomCustomersPerhour();
//                       // console.log(customers);
//                       let cookiesSoldEachHour = Math.ceil(customers * this.avg);
                      
//                       this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
                
//                       // Calculating the sum on these hourly totatls
//                       //
//                       // this.dailyTotal += this.generateCookiesPerHour
                      
//                     }
//                     for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
//                       this.dailyTotal += this.cookiesSoldEachHourArray[i]
//                     }
//                     console.log(this.cookiesSoldEachHourArray)
//                   },
                
//                   // printCity: function(){
//                   //   let citySection = document.createElement('section');
//                   //   cities.appendChild(citySection);
                
//                   //   let cityHead = document.createElement('h3');
//                   //   cityHead.textContent = `${this.location}`;
//                   //   citySection.appendChild(cityHead);
                    
//                   //   let cPH = document.createElement('ul');
//                   //   citySection.append(cPH);
                
//                   //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
//                   //     let li = document.createElement('li');
//                   //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
//                   //     cPH.appendChild(li); 
//                     // }
                  
                    
//                     render: function() {
//                       this.generateCookiesPerHour();
//                       // method to rend cookies sales as a <ul>
                      
//                       //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
//                       let salesContainer = document.getElementById('limaSales'); console.log(salesContainer)
//                       let h2element = document.createElement('h2')
//                       h2element.textContent = 'Lima Store'
//                       salesContainer.appendChild(h2element)
                      
//                       console.log(salesContainer)
                      
//                       //create a new element
//                       let ulElement= document.createElement('ul');
//                       // give it content 
//                       // append it to the DOM
//                       salesContainer.appendChild(ulElement);
                      
//                       for (let i = 0; i < hours.length; i++) {
                        
//                         // create a new element
//                         let liElement = document.createElement('li');
//                         liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                        
//                         //append it to the DOM
//                         ulElement.appendChild(liElement);
//                       }
//                       let totalLiElement = document.createElement('li');
                      
//                       totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
//                       ulElement.appendChild(totalLiElement);
//                     }
                    
                    
//                   }
                    
//                     lima.generateCookiesPerHour();
//                     lima.render();
// // Calculate the sum of the hourly totals
//   // // fucntional logic assigned to objects are "methods"
//   // for (let i =0; i < this.hours.length, i++) {
//   // let customer = this.getNumberOfRandomCustomers();
//   //   let cookies = Math.random() * (this.max - this.min + 1)+ this.min),
//   // }
//   // function() {
//   //   for (let i = 0; i < hours.length; i++) {
//   //     let customers = this.getNumberOfRandomCustomers();
//   //     let cookies = Math.ceil(customers * this.avg)
//   //     this.cookiesSoldEachHour.push(`${hour[i]} ${cookies} cookies.`)
//   //   }

//   // }
//   // console.log (cookiesSoldEachHour[i]);
  


// seattle.cookiesSoldEachHour());
// console.log(seattle.getNumberOfRandomCustomers());
  // calculateCookiesSoldPerHour: function() {
  //   // get the random nunmber of customers
  //   let numberOfRandomCustomers = this.getNumberOfRandomCustomers();


//********GLOBALS**********

let locationArray = [];

let hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//*********DOM WINDOW********/

let table = document.getElementById('Locations');

//console.dir(locationSection);

//*********EXECUTABLE CODE********/

let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6)


locationArray.push(seattle, tokyo, dubai, paris, lima);
//locationArray = [{...}, {...}, {...}]




//******** HELPER FUNCTIONS / UTILITIES*******/

//push new objects into an array - for easy storage - this will help with lab


function randomTotal(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//*********CONSTRUCTOR FUNCTION**********/

function Location(name, minCust, maxCust, avgCookieBought) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [];
  this.total = 0;
}

//**********PROTOTYPE METHODS*********/

Location.prototype.getrandomcustomer = function () {
  // got from MDN docs
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

