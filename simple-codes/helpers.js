helper = {
    name : "Elie",
    age : 30,
    sayHello : function() {
        console.log("Hello " + this.name);
        console.log("You are " + this.age + " years old");
        console.log("And I am a helper function");
    }
}
exports = module.exports = helper;