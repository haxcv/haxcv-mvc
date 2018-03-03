'use strict';
let All = require("../libs/Controller");

class boot {

	    constructor(){		
			this.View  		 = All.View;
			this.Model 		 = All.Model;	
			var fs     		 = require("fs");
			var cnf    		 = JSON.parse(fs.readFileSync("server-config.json").toString());
            this.port  		 =   cnf.listen.port || 8080;
            this.addr      	 =   cnf.listen.host || '127.0.0.2';
            this.disabledDir = cnf['Disabled-Directory'] || {};
            this.indexs  	 = cnf['Indexs-pages'] || {};
            this.headers 	 = cnf['headers'] || {};
					
	   }
   
					
	    __init__(){
			this.Model.res = this.res;
			this.View.res  = this.res;
			this.Model.req = this.req;
			this.View.req  = this.req;

			this.View.cgi  = require("haxcv-jsh");
			this.View.fs   = require("fs");
			this.View.url  = require("url");
            this.View.cgi.title = "Welcome to haxcv Templates Engine";

			this.req.on('data' , (d) =>{                        
		            this.View.export({'POST':  JSON.stringify(this.parseQuery(d.toString()) )});
		     });	
            this.View.export({'host' : this.addr+":"+this.port});	
            this.View.export({'COOKIE' : JSON.stringify(this.getCookie(this.req))});		    
		    this.View.export({'GET'    : JSON.stringify(this.parseQuery(this.View.url.parse(this.req.url).query))});
		    this.View.export({'HEADER' : JSON.stringify(this.req.headers)});	                       
		    this.View.export({'host'   : this.req.headers.host});	                       



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


		index(arg){		
          const m = this.Model.call("init");                      
	            m.getUserData((e) => {  	            	
	                this.View.export({userData:e});          	            			
					this.View.render('index/index');
	            });                        			
		}

		List(arg ){				          	                       	            	
					this.View.render('temp/file_list' , true);	      
		}

		error(code){					
		    this.res.writeHead(code);					
			this.View.render('error/'+code);
		}
        
        login(code){	

			this.View.cgi.title = "Login";
			this.View.render('login/index');
		}
		signup(code){	

			this.View.cgi.title = "signup";
			this.View.render('signup/index');
		}
		

	}

			 
	

	module.exports =   new boot();
