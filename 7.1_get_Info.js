"use strict"

let client = {
      name:"Anna", 
      age: 23,
      height: 170 + " centimeters",
      weight: 55 + ' kilograms',
      getInfo: function() {
        for (let x in client) {
          if (typeof client[x] != 'function') {
            console.log('Client\'s ' + x + ' is ' + client[x]);
          }
        };
      }
  };
  

client.getInfo();

client.city = "Kyiv";
client.getInfo();
