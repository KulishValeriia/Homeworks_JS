"use strict";

const pattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo).com$/g

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
    {
        userName:"Faina",
        lastName:"Ivanova",
        email:"Ivanova23 yahoo.com"
    }
];

function validateUsers(users) {
    var res = []

    users.forEach(u => {
        const match = u.email.match(pattern);
        if (match != null && match.length > 0) {
            res.push(u)
        }
    });

    return res
}

function invalidateUsers(users) {
    var res = []

    users.forEach(u => {
        const match = u.email.match(pattern);
        if (match == null) {
            res.push(u)
        }
    });

    return res
}

console.log(validateUsers(arr))

console.log(invalidateUsers(arr))