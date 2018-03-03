# haxcv-mvc
haxcv-mvc is MVC  template with jsH templates Engine 

your dealing with nodejs MVC template with jsH 
###  you need to know 3 points 

> controllers 

>  models 

> views 
### create controller
```
 to create new controller go to controllers/boot.js and add new method 
```
```javascript
   newMethod(){ 
      this.View.cgi.title = "new title";
      this.View.render('newMethod/index');
  }
```
### and create view 
```
open views folder and create new folder newMethod 
then create index file with new folder index.html
```

### create model 
``` to create model you have 2 options 
by creating new method with models/init.js or create new file as you want 
```

### ad new Method 
```javascript
login(callback){

     var config = {
	  host:"localhost",
	  user:"root",
	  pass:""
	};
     var sql = require("mysql");
     var db = sql.createConnection(this.config);
     db.query("SELECT * FROM ``.`` WHERE user='user' and pass='123' " , (e , r) =>{
             callback(e ? 'error' : r);
      });

}
```	

