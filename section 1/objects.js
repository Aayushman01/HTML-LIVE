const user = {
    name : 'Ramu',
    email : 'ramu@mail.com',
    age: 56,
    password : 'uncbe673',
    'roll-no' : 'A12787'

}

console.log( user.name );
console.log( user['age'] );

console.log(user['roll-no']);

user.city = 'Lucknow';

console.log(user);

user.age = 42;

const smartphone = {
    brand : 'Samsung',
    model : 's23',
    price : 80000,
    colors : [ 'black', 'blue', 'gyey' ]
};

console.log( smartphone.colors[2] );
smartphone.colors[2] = 'red';
console.log(smartphone);
const smartphoneList = [
    { brand: 'Samsung', model : 's23', price : 80000, colors : ['black', 'blue', 'grey'] }
];

console.log(smartphoneList[0].brand);
console.log( smartphoneList[0].colors[1][0] );
