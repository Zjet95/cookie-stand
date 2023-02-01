' use strict '

// console.log('hi!')

// let cities = document.getElementById('cities');

// console.log(cities);

let hours = ['6 a.m.', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 p.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m',]

let seattle = {
  
  name: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldEachHourArray:[],
  dailyTotal: 0,
  
  getNumberOfRandomCustomersPerhour: function() {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
  
  generateCookiesPerHour: function() {
    // - for each hour at each location
    for (let i = 0; i < hours.length; i++) {
      //- the random number of customers generated.
      let customers = this.getNumberOfRandomCustomersPerhour();
      // console.log(customers);
      let cookiesSoldEachHour = Math.ceil(customers * this.avg);
      
      this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);

      // Calculating the sum on these hourly totatls
      //
      // this.dailyTotal += this.generateCookiesPerHour
      
    }
    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
      this.dailyTotal += this.cookiesSoldEachHourArray[i]
    }
    console.log(this.cookiesSoldEachHourArray)
  },

  // printCity: function(){
  //   let citySection = document.createElement('section');
  //   cities.appendChild(citySection);

  //   let cityHead = document.createElement('h3');
  //   cityHead.textContent = `${this.location}`;
  //   citySection.appendChild(cityHead);
    
  //   let cPH = document.createElement('ul');
  //   citySection.append(cPH);

  //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
  //     let li = document.createElement('li');
  //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
  //     cPH.appendChild(li); 
    // }
  
    
    render: function() {
      this.generateCookiesPerHour();
      // method to rend cookies sales as a <ul>
      
      //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
      let salesContainer = document.getElementById('seattleSales');
      let h2element = document.createElement('h2')
      h2element.textContent = 'Seattle Store'
      salesContainer.appendChild(h2element)
      
      console.log(salesContainer)
      
      //create a new element
      let ulElement= document.createElement('ul');
      // give it content 
      // append it to the DOM
      salesContainer.appendChild(ulElement);
      
      for (let i = 0; i < hours.length; i++) {
        
        // create a new element
        let liElement = document.createElement('li');
        liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
        
        //append it to the DOM
        ulElement.appendChild(liElement);
      }
      let totalLiElement = document.createElement('li');
      
      totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
      ulElement.appendChild(totalLiElement);
    }
    
    
  }
    
    seattle.generateCookiesPerHour();
    seattle.render();
    
    let tokyo = {
  
      name: 'tokyo',
      min: 3,
      max: 24,
      avg: 1.2,
      cookiesSoldEachHourArray:[],
      dailyTotal: 0,
      
      getNumberOfRandomCustomersPerhour: function() {
          return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
      
      generateCookiesPerHour: function() {
        // - for each hour at each location
        for (let i = 0; i < hours.length; i++) {
          //- the random number of customers generated.
          let customers = this.getNumberOfRandomCustomersPerhour();
          // console.log(customers);
          let cookiesSoldEachHour = Math.ceil(customers * this.avg);
          
          this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
    
          // Calculating the sum on these hourly totatls
          //
          // this.dailyTotal += this.generateCookiesPerHour
          
        }
        for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
          this.dailyTotal += this.cookiesSoldEachHourArray[i]
        }
        console.log(this.cookiesSoldEachHourArray)
      },
    
      // printCity: function(){
      //   let citySection = document.createElement('section');
      //   cities.appendChild(citySection);
    
      //   let cityHead = document.createElement('h3');
      //   cityHead.textContent = `${this.location}`;
      //   citySection.appendChild(cityHead);
        
      //   let cPH = document.createElement('ul');
      //   citySection.append(cPH);
    
      //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
      //     let li = document.createElement('li');
      //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
      //     cPH.appendChild(li); 
        // }
      
        
        render: function() {
          this.generateCookiesPerHour();
          // method to rend cookies sales as a <ul>
          
          //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
          let salesContainer = document.getElementById('tokyoSales'); console.log(salesContainer)
          let h2element = document.createElement('h2')
          h2element.textContent = 'Tokyo store'
          salesContainer.appendChild(h2element)
          
          console.log(salesContainer)
          
          //create a new element
          let ulElement= document.createElement('ul');
          // give it content 
          // append it to the DOM
          salesContainer.appendChild(ulElement);
          
          for (let i = 0; i < hours.length; i++) {
            
            // create a new element
            let liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
            
            //append it to the DOM
            ulElement.appendChild(liElement);
          }
          let totalLiElement = document.createElement('li');
          
          totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
          ulElement.appendChild(totalLiElement);
        }
        
        
      }
        
        tokyo.generateCookiesPerHour();
        tokyo.render();
        
        let dubai = {
  
          name: 'dubai',
          min: 11,
          max: 38,
          avg: 3.7,
          cookiesSoldEachHourArray:[],
          dailyTotal: 0,
          
          getNumberOfRandomCustomersPerhour: function() {
              return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            },
          
          generateCookiesPerHour: function() {
            // - for each hour at each location
            for (let i = 0; i < hours.length; i++) {
              //- the random number of customers generated.
              let customers = this.getNumberOfRandomCustomersPerhour();
              // console.log(customers);
              let cookiesSoldEachHour = Math.ceil(customers * this.avg);
              
              this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
        
              // Calculating the sum on these hourly totatls
              //
              // this.dailyTotal += this.generateCookiesPerHour
              
            }
            for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
              this.dailyTotal += this.cookiesSoldEachHourArray[i]
            }
            console.log(this.cookiesSoldEachHourArray)
          },
        
          // printCity: function(){
          //   let citySection = document.createElement('section');
          //   cities.appendChild(citySection);
        
          //   let cityHead = document.createElement('h3');
          //   cityHead.textContent = `${this.location}`;
          //   citySection.appendChild(cityHead);
            
          //   let cPH = document.createElement('ul');
          //   citySection.append(cPH);
        
          //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
          //     let li = document.createElement('li');
          //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
          //     cPH.appendChild(li); 
            // }
          
            
            render: function() {
              this.generateCookiesPerHour();
              // method to rend cookies sales as a <ul>
              
              //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
              let salesContainer = document.getElementById('dubaiSales'); console.log(salesContainer)
              let h2element = document.createElement('h2')
              h2element.textContent = 'Dubai Store'
              salesContainer.appendChild(h2element)
              
              console.log(salesContainer)
              
              //create a new element
              let ulElement= document.createElement('ul');
              // give it content 
              // append it to the DOM
              salesContainer.appendChild(ulElement);
              
              for (let i = 0; i < hours.length; i++) {
                
                // create a new element
                let liElement = document.createElement('li');
                liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                
                //append it to the DOM
                ulElement.appendChild(liElement);
              }
              let totalLiElement = document.createElement('li');
              
              totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
              ulElement.appendChild(totalLiElement);
            }
            
            
          }
            
            dubai.generateCookiesPerHour();
            dubai.render();

            let paris = {
  
              name: 'paris',
              min: 20,
              max: 38,
              avg: 2.3,
              cookiesSoldEachHourArray:[],
              dailyTotal: 0,
              
              getNumberOfRandomCustomersPerhour: function() {
                  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
                },
              
              generateCookiesPerHour: function() {
                // - for each hour at each location
                for (let i = 0; i < hours.length; i++) {
                  //- the random number of customers generated.
                  let customers = this.getNumberOfRandomCustomersPerhour();
                  // console.log(customers);
                  let cookiesSoldEachHour = Math.ceil(customers * this.avg);
                  
                  this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
            
                  // Calculating the sum on these hourly totatls
                  //
                  // this.dailyTotal += this.generateCookiesPerHour
                  
                }
                for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
                  this.dailyTotal += this.cookiesSoldEachHourArray[i]
                }
                console.log(this.cookiesSoldEachHourArray)
              },
            
              // printCity: function(){
              //   let citySection = document.createElement('section');
              //   cities.appendChild(citySection);
            
              //   let cityHead = document.createElement('h3');
              //   cityHead.textContent = `${this.location}`;
              //   citySection.appendChild(cityHead);
                
              //   let cPH = document.createElement('ul');
              //   citySection.append(cPH);
            
              //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
              //     let li = document.createElement('li');
              //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
              //     cPH.appendChild(li); 
                // }
              
                
                render: function() {
                  this.generateCookiesPerHour();
                  // method to rend cookies sales as a <ul>
                  
                  //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
                  let salesContainer = document.getElementById('parisSales'); console.log(salesContainer)
                  let h2element = document.createElement('h2')
                  h2element.textContent = 'Paris Store'
                  salesContainer.appendChild(h2element)
                  
                  console.log(salesContainer)
                  
                  //create a new element
                  let ulElement= document.createElement('ul');
                  // give it content 
                  // append it to the DOM
                  salesContainer.appendChild(ulElement);
                  
                  for (let i = 0; i < hours.length; i++) {
                    
                    // create a new element
                    let liElement = document.createElement('li');
                    liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                    
                    //append it to the DOM
                    ulElement.appendChild(liElement);
                  }
                  let totalLiElement = document.createElement('li');
                  
                  totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
                  ulElement.appendChild(totalLiElement);
                }
                
                
              }
                
                paris.generateCookiesPerHour();
                paris.render();

                let lima = {
  
                  name: 'lima',
                  min: 2,
                  max: 16,
                  avg: 4.6,
                  cookiesSoldEachHourArray:[],
                  dailyTotal: 0,
                  
                  getNumberOfRandomCustomersPerhour: function() {
                      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
                    },
                  
                  generateCookiesPerHour: function() {
                    // - for each hour at each location
                    for (let i = 0; i < hours.length; i++) {
                      //- the random number of customers generated.
                      let customers = this.getNumberOfRandomCustomersPerhour();
                      // console.log(customers);
                      let cookiesSoldEachHour = Math.ceil(customers * this.avg);
                      
                      this.cookiesSoldEachHourArray.push(cookiesSoldEachHour);
                
                      // Calculating the sum on these hourly totatls
                      //
                      // this.dailyTotal += this.generateCookiesPerHour
                      
                    }
                    for (let i = 0; i < this.cookiesSoldEachHourArray.length; i++){
                      this.dailyTotal += this.cookiesSoldEachHourArray[i]
                    }
                    console.log(this.cookiesSoldEachHourArray)
                  },
                
                  // printCity: function(){
                  //   let citySection = document.createElement('section');
                  //   cities.appendChild(citySection);
                
                  //   let cityHead = document.createElement('h3');
                  //   cityHead.textContent = `${this.location}`;
                  //   citySection.appendChild(cityHead);
                    
                  //   let cPH = document.createElement('ul');
                  //   citySection.append(cPH);
                
                  //   for (let i = 0; i < this.cookiesSoldEachHourArray; i++){
                  //     let li = document.createElement('li');
                  //     li.textContent = `${this.cookiesSoldEachHourArray[i]}`;
                  //     cPH.appendChild(li); 
                    // }
                  
                    
                    render: function() {
                      this.generateCookiesPerHour();
                      // method to rend cookies sales as a <ul>
                      
                      //window into the DOM (our foot in the door to manipulate HTML & CSS elements with JS)
                      let salesContainer = document.getElementById('limaSales'); console.log(salesContainer)
                      let h2element = document.createElement('h2')
                      h2element.textContent = 'Lima Store'
                      salesContainer.appendChild(h2element)
                      
                      console.log(salesContainer)
                      
                      //create a new element
                      let ulElement= document.createElement('ul');
                      // give it content 
                      // append it to the DOM
                      salesContainer.appendChild(ulElement);
                      
                      for (let i = 0; i < hours.length; i++) {
                        
                        // create a new element
                        let liElement = document.createElement('li');
                        liElement.textContent = `${hours[i]}: ${this.cookiesSoldEachHourArray[i]} cookies`;
                        
                        //append it to the DOM
                        ulElement.appendChild(liElement);
                      }
                      let totalLiElement = document.createElement('li');
                      
                      totalLiElement.textContent = `Total: ${this.dailyTotal} cookies`
                      ulElement.appendChild(totalLiElement);
                    }
                    
                    
                  }
                    
                    lima.generateCookiesPerHour();
                    lima.render();
// Calculate the sum of the hourly totals
  // // fucntional logic assigned to objects are "methods"
  // for (let i =0; i < this.hours.length, i++) {
  // let customer = this.getNumberOfRandomCustomers();
  //   let cookies = Math.random() * (this.max - this.min + 1)+ this.min),
  // }
  // function() {
  //   for (let i = 0; i < hours.length; i++) {
  //     let customers = this.getNumberOfRandomCustomers();
  //     let cookies = Math.ceil(customers * this.avg)
  //     this.cookiesSoldEachHour.push(`${hour[i]} ${cookies} cookies.`)
  //   }

  // }
  // console.log (cookiesSoldEachHour[i]);
  


// seattle.cookiesSoldEachHour());
// console.log(seattle.getNumberOfRandomCustomers());
  // calculateCookiesSoldPerHour: function() {
  //   // get the random nunmber of customers
  //   let numberOfRandomCustomers = this.getNumberOfRandomCustomers();



// // *****Globals*****

// let hours = ['6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM'];
// let totalPerHourArr = [];
// let cityArr = [];
// let seattle = new City('Seattle', 23, 65, 6.3);
// let tokyo = new City('Tokyo', 3, 24, 1.2);
// let dubai = new City('Dubai', 11, 38, 6.3);
// let paris = new City('Paris', 20, 38, 2.3);
// let lima = new City('Lima', 2, 16, 4.6);
// cityArr.push(seattle, tokyo, dubai, paris, lima);

// // *****DOM Windows*****

// let salesTable = document.getElementById('sales');

// let cookieForm = document.getElementById('cookie-form');

// // *****Helper Functions/Utilities******

// function randomCustomer(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function renderAll() {
//   for (let i = 0; i < cityArr.length; i++) {
//     cityArr[i].getCookiesSold();
//     cityArr[i].render();
//   }
// }

// function tableHeader() {
//   let row1 = document.createElement('tr');
//   salesTable.appendChild(row1);
//   let cityHead = document.createElement('th');
//   cityHead.innerText = 'City Name';
//   row1.appendChild(cityHead);
//   for (let i = 0; i < hours.length; i++) {
//     let thElem = document.createElement('th');
//     thElem.innerText = hours[i];
//     row1.appendChild(thElem);
//   }
//   let totalLocation = document.createElement('th');
//   totalLocation.innerText = 'Daily Location Total';
//   row1.appendChild(totalLocation);

// }

// function tableFooter() {
//   let footer = document.createElement('tr');
//   footer.innerText = 'Totals Per Hour';
//   footer.id = 'tableFooter';
//   salesTable.appendChild(footer);
//   for (let i = 0; i < totalPerHourArr.length; i++) {
//     let thElem = document.createElement('th');
//     thElem.innerText = totalPerHourArr[i];
//     footer.appendChild(thElem);
//   }
//   let grandTotal = 0;
//   for (let i = 0; i < totalPerHourArr.length; i++) {
//     grandTotal = totalPerHourArr[i] + grandTotal;
//   }
//   let thElem = document.createElement('th');
//   thElem.innerText = 'Grand Total is: ' + grandTotal;
//   footer.appendChild(thElem);
// }

// function totalPerHour(randomNumber, i) {
//   totalPerHourArr[i] += randomNumber;
// }
// // ******Object Literals******

// function City(name, minCustomer, maxCustomer, averageCookie) {

//   this.name = name;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.averageCookie = averageCookie;
//   this.cookiesSold = [];
// }

// City.prototype.getCookiesSold = function () {
//   let totalCookies = 0;
//   let ranNum = 0;
//   for (let i = 0; i < hours.length; i++) {
//     ranNum = Math.floor(randomCustomer(this.minCustomer, this.maxCustomer) * this.averageCookie);
//     this.cookiesSold.push(ranNum);
//     totalCookies = ranNum + totalCookies;
//     totalPerHour(ranNum, i);

//     if (i === hours.length - 1) {
//       this.cookiesSold.push(`Total: ${totalCookies}`);
//     }
//   }
// };

// City.prototype.render = function () {
//   let row2 = document.createElement('tr');
//   salesTable.appendChild(row2);
//   let cityName = document.createElement('td');
//   cityName.innerText = this.name;
//   row2.appendChild(cityName);

//   for (let i = 0; i < this.cookiesSold.length; i++) {
//     let tdElement = document.createElement('td');
//     tdElement.innerText = this.cookiesSold[i];
//     row2.appendChild(tdElement);
//   }
// };

// function handleSubmit(event) {
//   event.preventDefault();

//   let cityName = event.target.cityName.value;
//   let minCustomer = event.target.minCustomer.value;
//   let maxCustomer = event.target.maxCustomer.value;
//   let averageCookie = event.target.averageCookie.value;

//   let newCity = new City(cityName, minCustomer, maxCustomer, averageCookie);

//   cityArr.push(newCity);
//   newCity.getCookiesSold();
//   newCity.render();
//   document.getElementById('tableFooter').remove();
//   tableFooter();
// }

// // ******Executable Code******

// tableHeader();
// totalPerHourArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// renderAll();
// tableFooter();
// cookieForm.addEventListener('submit', handleSubmit);