Usage: node main.js [options] [ command ] [arguments] 
       node main.js serv script.jsh [arguments] 

Options:
  -v, --version         print haxcv version
  -c, --compile         compile script    
  -w, --write           write file  
  -s, --start           start MVC mode 
  -r, --serv            serv from file 
  --no-compile          disable jsH
  
  [examples]: 
  		node main.js -v 
  		node main.js --compile script.jsh
  		node main.js --compile script.jsh -w out.html
  		node main.js serv script.jsh --port 8080
  		node main.js serv script.jsh --no-compile
  		node main.js start --no-compile
  




Documentation can be found at https://haxcv.org/cli
