const chalk=require('chalk');
const info=function(...params){
    console.log(chalk.green(...params));

}
const error=function(...params){
    console.error(chalk.red(...params));
}

module.exports= {info,error};