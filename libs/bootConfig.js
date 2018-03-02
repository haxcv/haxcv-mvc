'use strict';

var fs = require("fs");
let http = require("http");
let url  = require("url");
let jsh  = require("haxcv-jsh");

class bootConfig
{			
	constructor()
	{	
   

    }

    compile(args){

    	fs.readFile(args[3] , (e ,s)=>{
    	if(!e){
           s = jsh.compile(s.toString());
           if(args[4] == '-w' || args[4] == 'write'){
             fs.writeFile(args[5] , s , (er , rs) => {        
             	console.log(er ? er : "compile : ok output => "+args[5]);
             });
             

           }else{
	       	 console.log(s);
           }
	       }else{
	       	console.log("file doesn't exists ");
	       }

    	});

    }

    serv(args){          
     fs.readFile(args[3] , (e ,s)=>{
      
       if(!e)
       {
       	var server = http.createServer((req , res) => {	
            res.end(args[4] == '--no-compile' ? s.toString() : jsh.compile(s.toString()));
       	});
        var port = args[4] == '-p' || args[4] == '--port' ? (args[5] || 8000) :  8000;
       	server.listen(port);
        console.log("listening on port "+port+" file : "+args[3]);
       }else{
       	 console.log("file doesn't exists ");
       }

     });



    }

    help(){
    	
    	 fs.readFile('./libs/debug.jsh' , (e ,s)=>{
            console.log(s.toString())
    	});     	 
    }


}


module.exports = new bootConfig();