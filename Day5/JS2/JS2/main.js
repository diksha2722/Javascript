import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

let count=0;
for(let i=0;i<countries.length;i++){
    if(countries[i]=='Ethiopia'){
        count++;
    }
}
if(count<1){
    countries.push('Ethiopia');

}
console.log(countries);

//equal halves
const midpoint = Math.ceil(countries.length / 2);
const first = countries.slice(0, midpoint);
const second = countries.slice(midpoint);

console.log('First Half:', first);
console.log('Second Half:', second);