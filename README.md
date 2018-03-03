# haxcv-mvc
haxcv-mvc is MVC  template with jsH templates Engine 

your dealing with nodejs MVC template with jsH 
###  you need to know 3 points 

> controllers 

>  models 

> views 

### required modules :
```
 npm install haxcv-jsh
 npm install mysql
 npm install mime-types
```
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

### add new Method 
```javascript
login(callback){

     var config = {
	  host:"localhost",
	  user:"root",
	  pass:""
	};
     var sql = require("mysql");
     var db = sql.createConnection(config);
     db.query("SELECT * FROM ``.`` WHERE user='user' and pass='123' " , (e , r) =>{
             callback(e ? 'error' : r);
      });

}
```	
### call models from controller
```javascript
   newMethod(){  
      let init = this.Model.call("init");      
      init.login((result)=>{
         if(result == 'error'){
	   this.res.end("incorrect data");
	 }else{
	   this.res.end("logged successfully");
	 }
      });
  }
 ```
  you can also pass data to model
 
 ### export data to views 
 ```javascript 
 newMethod(){ 
      this.View.export({"data": "this data page "});
      this.View.export({"text": "welcome to new method"});
      this.View.render('newMethod/index');
  }
  ```
  > views/newMethod/index.html
  ```html
  <?
 jsH.require("./views/header.html"); 
?>


<div class="topic-view">
<h2 >newMethhod page </h2>
<h3>{@this.data@}</h3>
 <?
 
 print(this.text);
 
 ?>
</div>


<?
 jsH.require("./views/footer.html"); 
?>
```
### commands 
```
Usage: npm start [options] [ command ] [arguments] 
       npm start serv script.jsh [arguments] 

Options:
  -v, --version         print haxcv version
  -c, --compile         compile script    
  -w, --write           write file  
  -s, --start           start MVC mode 
  -r, --serv            serv from file 
  --no-compile          disable jsH
  
  [examples]: 
  		npm start -v 
  		npm start --compUsage: npm start [options] [ command ] [arguments] 
       npm start serv script.jsh [arguments] 

Options:
  -v, --version         print haxcv version
  -c, --compile         compile script    
  -w, --write           write file  
  -s, --start           start MVC mode 
  -r, --serv            serv from file 
  --no-compile          disable jsH
  
  [examples]: 
  		npm start -v 
  		npm start --compile script.jsh
  		npm start --compile script.jsh -w out.html
  		npm start serv script.jsh --port 8080
  		npm start serv script.jsh --no-compile
  		npm start start --no-compile
  




Documentation can be found at https://haxcv.org/cli
ile script.jsh
  		npm start --compile script.jsh -w out.html
  		npm start serv script.jsh --port 8080
  		npm start serv script.jsh --no-compile
  		npm start start --no-compile
  




Documentation can be found at https://haxcv.org/cli

```
