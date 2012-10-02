Ext.define('ECAT.controller.ListController', {
    extend: 'Ext.app.Controller',

    config: {
    	refs:{  
    	},
    	control: {
            '#imagelist img': {
                tap: 'showImage'
            }
        },
        routes: {
        }
    },

    //opens a new window to show the file
     showImage: function(img) {
     	var filename = img.getSrc();
    	console.log(filename);
    	var imageDetailView = Ext.create('ECAT.view.ImageDetailView',{});
    	filename = "resources/images/da/"+ filename + ".png";
    	imageDetailView.getComponent('imagedetail').setSrc(filename);
    	imageDetailView.getComponent('imagedetail1').setSrc(filename);
    	imageDetailView.getComponent('imagedetail2').setSrc(filename);
        Ext.Viewport.animateActiveItem(
	        imageDetailView,  
			{  
			    type: 'slide',  
			    direction: 'left'  
			}
	    ); 
    }
});
