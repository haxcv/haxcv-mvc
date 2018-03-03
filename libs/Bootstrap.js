'use strict';

let Config = require("./bootConfig");

class Bootstrap
	{			
		constructor()
		{	
   
           let args = process.argv;
           let config = {
           	start:'__init__',
           	serv:'__init__'           	
           }; 
           
           
	        try{

	           switch(args[2])
	           {
	           	 case 'start':
	           	     this.__init__(args[3]);	           	     
	           	 break;
	           	 case 'serv':
	           	     if(args[3])
	           	     {
	           	     	Config.serv(args);	           	     	
	           	     }else{
	           	     	Config.help();
	           	     }
	           	 break;
	           	 case '-v':
                   console.log('v1.0.1 ');
                   break;
	           	 case '--version':
                   console.log('v1.0.1 ');
	           	 break;
	           	 case '-h':
                   Config.help();
                   break;
	           	 case '--help':
                   Config.help();
	           	 break;
	           	 case '-c':
                   Config.compile(args);
                   break;
	           	 case '--compile':
                   Config.compile(args);                   
	           	 break;

	           	 default:
	           	 this.__init__(args[2]);
	           	 break;
	           }
	       }catch(err)
	       {
	       	console.log(err)
	       }	       
	       	 

		}

		__init__(t){

		  var http = require("http"),
		    url    = require("url"),
		    fs     = require("fs"),
		    mime   = require("mime-types"),
		    haxcv  = require("haxcv-jsh"),
		    boot   = require("../controllers/boot");		    
		    var controller =  boot;		    
		    controller.fs = fs;
		    this.getConfig();
		    if(t == '--no-compile')
		    {
		    	this.compile['enabled-jsh'] = false;
		    }
		    
		    controller.View.compile = this.compile['enabled-jsh'];
		    controller.View.export({'addr' : this.addr+":"+this.port});		    	
		   

		    var server = http.createServer((req , res) => {		    	
		    	var rURL = req.url.split("?")[0];
		    	var POST = {};
		    	controller.res  = res;
		    	controller.req  = req;	
		    	req.on('data' , (d) =>{                        
		            controller.View.export({'POST':  JSON.stringify(this.parseQuery(d.toString()) )});
		            POST = this.parseQuery(d.toString());
		        });		    	
		    	controller.View.export({'COOKIE' : JSON.stringify(this.getCookie(req))});		    	
		    	controller.View.export({'GET'    : JSON.stringify(this.parseQuery(url.parse(req.url).query))});
		    	controller.View.export({'HEADER' : JSON.stringify(req.headers)});	
		    	controller.View.export({'host'   : req.headers.host});	

		    	
		    			    	

		    	for(var k in this.headers)
		    	{
                    res.setHeader(k , this.headers[k]);
		    	}

		    	controller.__init__();			    	    	
		    	var uri = this.parseUrl(req.url);
		    	var page = uri[0].split("?")[0].toLowerCase();	
		    	page = page == "" ? "index" : page;	    			    	
		    	try{ 		

                   if(page == 'index' ) throw new Error("root Dir is disabled to  view");

                    fs.readdir("."+(req.url.split("?")[0]) , (e , b)=>{
                    	if(e){
                    		var file = fs.readFile("."+(req.url.split("?")[0]) , (em , d)=>{
                    			if(d){
                    				var dOfFile = req.url.split("/");
                    				    dOfFile = dOfFile[dOfFile.length  - 2];
                    			 if(!this.isDisabledDir(dOfFile)){
                    			 	var ts = {
                    			 		'application/javascript':true,
                    			 		'text/javascript':true,
                    			 		'application/typescript':true
                    			 	};
                    			 	var type = mime.lookup("."+(req.url.split("?")[0]));
                    			 	haxcv['COOKIE'] = this.getCookie(req);		    
								    haxcv['GET']  =  this.parseQuery(url.parse(req.url).query);
								    haxcv['POST']  =  POST;
								    haxcv['HEADER'] = req.headers;	                       
								    haxcv['host'] =  req.headers.host;
								    haxcv.response = res;
								    haxcv.request = req;
                    			 	var iSo = type in ts  ? d.toString() : haxcv.compile(d.toString());
	 							   res.end(this.compile['enabled-jsh'] ?  (iSo) : d.toString());
	 							  }else{
	 							  	controller.error(403);
	 							  }
                    			}else{
                    				if( page in controller ){		    				    			    	   
							    	    controller[page](uri);
							    	}else{		    							
							    		controller.error(404);
							    	}
                    			}

	                    		}); 							
                    	}else{                    		
                    		var ar = [];
                    		var inx = false;
                    		b.forEach((i)=>{
                    			try{
                    				fs.readdirSync("."+(req.url.split("?")[0])+"/"+i);
                    				
                    					ar.push({type:'dir' , 'name':((rURL) == "/" ? "" : (rURL)+"/")+i});
                    				}catch(error){
                    					ar.push({type:'file' , 'name':((rURL) == "/" ? "" : (rURL)+"/")+i});

                    				}
                    				if(i in this.indexs){
                    					haxcv['COOKIE'] = this.getCookie(req);		    
									    haxcv['GET']  =  this.parseQuery(url.parse(req.url).query);
									    haxcv['POST']  =  POST;
									    haxcv['HEADER'] = req.headers;	                       
									    haxcv['host'] =  req.headers.host;
									    haxcv.response = res;
									    haxcv.request = req;
                                      fs.readFile("."+(rURL)+"/"+i , (err , ds)=>{
                                      	res.end(this.compile['enabled-jsh'] ?  haxcv.compile(ds.toString()) :  ds.toString()); 										
                                      });
                                      inx = true;
                    				}


                    			

                    			
                    		});
                           if(!this.isDisabledDir(req.url)){
                           	    if(!inx)                           	    
                    			controller.View.export({files:ar});  
                    			controller.List(true);                  			                    			
                           }else{
                           	   controller.error(403);
                           }

                    	}                    	
                    });
                    




		    	}catch(er){			    	   	
		    	if( page in controller ){		    				    			    	   
		    	    controller[page](uri);
		    	}else{
		    		controller.error(404);
		    	}

		    }

		    });
		    
		    server.listen(this.port , this.addr);
		    console.log("lisitening on "+this.addr+"  port "+this.port);

		}


		isDisabledDir(uri)
		{
		  var u = this.parseUrl(uri);		  
          if(u[u.length - 1] in this.disabledDir)
          {
          	return true;
          }
		}

		getConfig()
		{
			var fs     = require("fs");
			var cnf    = JSON.parse(fs.readFileSync("server-config.json").toString());
            this.port  =   cnf.listen.port || 8080;
            this.addr  =   cnf.listen.host || '127.0.0.2';
            this.disabledDir = cnf['Disabled-Directory'] || {};
            this.indexs  = cnf['Indexs-pages'] || {};
            this.headers = cnf['headers'] || {};
            this.compile = cnf['compile'] || {};
			

		}

		parseUrl(uri)
		{
			uri = uri.split("/");
			var url = [];
			for (var i = 0; i < uri.length; i++) {
				if (uri[i] != '' ) {
					url.push(uri[i]);
				}
			}		
			return url.length == 0 ? ['index'] : url;
		}

			getCookie(str)
		  {

		    var d = str.headers.cookie || "";
		    var s = d.split(";");
		    var c = {};		    
		    try
		    {		    	
			     s.forEach( (ea) => {
			        c[ea.split("=")[0]] = ea.split("=")[1];
			     });
		     }catch(er)
		     {
		     }

		    return c;
		}

		  parseQuery(str)
		  {		     
		    var c = {};		     
		    try
		    {		    	
		    	var s = str.split("&");
			     s.forEach((ea)=>{
			        c[ea.split("=")[0]] = ea.split("=")[1];
			     });
		     }catch(er)
		     {
		     	
		     }		  		  	
		  return c;
		}


		



	}

	module.exports = new Bootstrap();
