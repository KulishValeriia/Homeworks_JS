"use strict";

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
                partners: [
                    {
                      name: 'Клієнт 1.2.3.4',
                      type: 'subSubsubCompany',
                      uses: 'Рішення для продажу квитків',
                      sells: 'Рішення для продажу квитків',
                    }
                  ]
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ],
  };

function findValueByKey(company, companyName) {
    if (company.name === companyName) {
      return company; // перевірка компанії
    }

    if (company.clients && company.clients.length > 0) {
      for (let i = 0; i < company.clients.length; i++) {
        let result = findValueByKey(company.clients[i], companyName);
        if (result) {
          return result; // перевірка клієнтів
        }
      }
    }
    
    if (company.partners && company.partners.length > 0) {
      for (let i = 0; i < company.partners.length; i++) {
        let result = findValueByKey(company.partners[i], companyName);
        if (result) {
          return result; // перевірка партнерів
        }
      }
    }
    
    return null; // налл, якщо жодного збігу не знайдено
  }
  
let companyInfo = findValueByKey(company, 'Клієнт 1.2.3');
console.log(companyInfo);

companyInfo = findValueByKey(company, 'Клієнт 2');
console.log(companyInfo);

companyInfo = findValueByKey(company, 'Клієнт 1.2.3.4');
console.log(companyInfo);

companyInfo = findValueByKey(company, 'Blabla');
console.log(companyInfo);