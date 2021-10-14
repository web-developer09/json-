"use strict";

let person={
    name:"feruza",
    age:19,
    job:"programmer",

    hobbies:{
        hobbiOne:"music",
        hobbiTwo:"play fudboll",
        hobbiThire:"lisiting music",
    }
};

const jsonFile=JSON.stringify(person);

const obj=JSON.parse(jsonFile);

obj.nike="pro";

console.log(person);

console.log(jsonFile);

console.log(obj);
