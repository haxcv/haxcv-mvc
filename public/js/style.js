 window.progress  = { 	
		hide:function(){	
		setTimeout(function(){		
 		var pg = _('*[page-progress]');
			 pg.style('width' , '100%');
			 setTimeout(function() {
			 	pg.style('width' , '0px');
			 } , 1000);
			}, 100);
		},
		show:function(){
			setTimeout(function(){
			 _('*[page-progress]').style('width' , '35%');			
			}  , 90);
		}

}