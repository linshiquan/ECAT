Ext.define("ECAT.view.ImageDetailView", {
    extend: 'Ext.Carousel',
    xtype:'imagedetailview',
    requires: ['Ext.Img'],
    config: {
    	id:'imagedetailview',
    	indicator:false,
    	items : [{
    		xtype:'image',
    		mode:true,
    		width: 768,
    		height: 1024,
    		id : 'imagedetail1'
    	},{
    		xtype:'image',
    		mode:true,
    		width: 768,
    		height: 1024,
    		id : 'imagedetail'
    	},{
    		xtype:'image',
    		mode:true,
    		width: 768,
    		height: 1024,
    		id : 'imagedetail2'
    	}],
    	fullscreen : true
    },
    onDragEnd : function(e) {
		this.callParent(arguments);
		var newImagePanel = Ext.create('Ext.Img', {
					mode : true,
					width: 768,
    				height: 1024
				});
		var activeIndex = this.getActiveIndex(),
			store = this.store,
			index = this.getComponent(activeIndex).index;
		// œÚ”“ª¨
		if (this.animationDirection == -1) {
			this.removeAt(activeIndex - 2);
			var last = index -1;
			if(last < 0){
    			last = store.getCount() - 1;
    		}
    		var lastModel = store.getAt(last);
			newImagePanel.setSrc("resources/images/da/"+ lastModel.get('name') + ".png");
			newImagePanel.index = last;
			this.insertLast(newImagePanel);
		} else if (this.animationDirection = 1) {
			// œÚ◊Ûª¨
			this.removeAt(activeIndex + 2);
			var next = index + 1;
	    	if(next == store.getCount()){
	    		next = 0;
	    	}
	    	var nextModel = store.getAt(next);
	    	newImagePanel.setSrc("resources/images/da/"+ nextModel.get('name') + ".png");
	    	newImagePanel.index = next;
			this.insertFirst(newImagePanel);
		}
	}
});

// Ext.create("ECAT.view.ImageDetailView",{
	// id:'imagedetailview'
//});