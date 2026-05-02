// const helpers = module.require('./helpers');

// console.log(helpers.name);
// helpers.sayHello();
const { myPets } = require('./myPets');
const { cat, dog } = myPets;

console.log(`My cat's name is ${cat} and my dog's name is ${dog}`);