'use strict';
class Model {

   call(arg)
   {

   	return require("../models/"+arg);
   	  
   }

}

module.exports = new Model();