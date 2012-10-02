Ext.define('ECAT.controller.ListController', {
    extend: 'Ext.app.Controller',

    config: {
    	refs:{
    		imagelist : '#imagelist'
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
     	var filename = img.fileName,
    		store = Ext.getCmp(imagelist.id).getStore(),
    		index = store.find('name', filename);
    	console.log(filename);
    	var imageDetailView = Ext.create('ECAT.view.ImageDetailView',{store : store});
    	filename = "resources/images/da/"+ filename + ".png";
    	imageDetailView.getComponent('imagedetail').setSrc(filename);
    	imageDetailView.getComponent('imagedetail').index = index;
    	var last = index - 1;
    	if(last < 0){
    		last = store.getCount() - 1;
    	}
    	var lastModel = store.getAt(last);
    	imageDetailView.getComponent('imagedetail1').setSrc("resources/images/da/"+ lastModel.get('name') + ".png");
    	imageDetailView.getComponent('imagedetail1').index = last;
    	var next = index + 1;
    	if(next == store.getCount()){
    		next = 0;
    	}
    	var nextModel = store.getAt(next);
    	imageDetailView.getComponent('imagedetail2').setSrc("resources/images/da/"+ nextModel.get('name') + ".png");
    	imageDetailView.getComponent('imagedetail2').index = next;
        Ext.Viewport.animateActiveItem(
	        imageDetailView,  
			{  
			    type: 'slide',  
			    direction: 'left'  
			}
	    ); 
    }
});
