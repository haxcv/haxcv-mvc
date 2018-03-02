'use strict';

class View{
	
	export(jsn){	
    
	    try{
	    	for(let k in jsn)
	    	   this.cgi[k] = jsn[k];
	    }catch(er){

	    }

	}
	render(url , t){	

			this.fs.readFile("views/"+url+".html" , (e , data) => {
				try{

				this.res.setHeader("Content-Type","text/html");
			   }catch(er){}
				if(!e){				
				if(this.compile || t){
					this.res.end(this.cgi.compile(data.toString()));					
				}else{
					this.res.end((data.toString()));					
				}
			}else{
				this.res.writeHead(500,"Server Error");
				this.res.end("<h1> Templates Error </h1> <p> views/"+url+" not found </p>");
			}
			});				
	}

	
}

module.exports = new View();