/* const showJobs = require('./jobs');
console.log(showJobs); */

//showJobs.showJobs();
//showJobs();

//# Esportazioni dirette
/* const { jobs } = require('./jobs');
console.log(jobs); */



//# Esportazione multipla
//const jobModule = require('./jobs');

//# node_modules
/* const jobs = require('./jobs');
console.log(jobs); // module.exports */
//console.log(arguments)

//% Module Wrapper Function
/* var num = 9;
(function (exports, require, module, __filename, __dirname) {
    // Codice modulo
    var p1 = 'Hello World';
    console.log(num / 3) // 3
})() */
//console.log(p1) // ReferenceError