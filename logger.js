var os =  require('fs')
var totalMemory = os.readdirSync('../first_app/');
var freeMemory = os.readFileSync('../out.txt');
console.log(`total memory : ${totalMemory}`);
console.log(`free memory : ${freeMemory}`);
function log (mess){
    console.log(mess) ;
}

//console.log(log('hhhh'));

//ll.log();

module.exports = log;
