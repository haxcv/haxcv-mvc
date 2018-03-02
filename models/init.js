'use strict';
class dbConfig
{
	constructor(){
		this.config = {
			host:"localhost",
			user:"root",
			pass:""
		}

		var sql = require("mysql");
		this.DB = sql.createConnection(this.config);
	}

	
}

class UData extends dbConfig
{


	getUserData(){		
            arguments[0]([
              {id:1 , name:"Manassa"},
              {id:2 , name:"Joseph"},
             ]);		

	}
}


module.exports = new UData;
