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
``` to create model 
