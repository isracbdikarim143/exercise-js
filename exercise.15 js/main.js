const people = [
    { name: "Isra", age: 19, city: "Somaliland" },
    { name: "Abdirahman", age: 30, city: "Somaliland" },
    {name:"amaal",age:22,city:"somaliland"},
    {name:"sead",age:40,city:"USA",}
];

for (let index in people) {
    if (index > 0) {
        console.log("---");
    }

    let person = people[index];

    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
}

