// function sum(a,b){

//     return a+b;
    
// }
// console.log(sum(1,2));
const path=require("path");
console.log(__dirname);
console.log(path.join("C:\ node_js","index.js")); //& simple string concatenation can be done as well;



import chalk from 'chalk';
console.log(chalk.blue('hello world'));
console.log(chalk.red.bold('Error'));
console.log(chalk.yellow.underline('chalk of different colours'));