var city1 = {name:"ГородN",population:"10 млн"};
var city2 = {name: "ГородM", population: 10**6};

function getName() { 
    return this.name;
 }
 
city1.getName = getName;
city2.getName = getName;
 
function exportStr() { 
    return `name=${this.name}\npopulation=${this.population}\n` 
}
 
city1.exportStr = exportStr;
city2.exportStr = exportStr;
 
console.log(city1.getName());
console.log(city2.getName());

console.log(city1.exportStr());
console.log(city2.exportStr());

