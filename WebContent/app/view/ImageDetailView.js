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
    		id : 'imagedetail'
    	},{
    		xtype:'image',
    		mode:true,
    		id : 'imagedetail1'
    	},{
    		xtype:'image',
    		mode:true,
    		id : 'imagedetail2'
    	}],
    	fullscreen : true
    },
    onDragEnd: function(e) {
    	 this.callParent(arguments);
		 var myPanel = Ext.create('Ext.Img', {
		    mode:true,
		    src:'resources/images/xiao/10.png'
		});
		var activeIndex =  this.getActiveIndex();
		  if (this.animationDirection == -1) {
               this.removeAt(activeIndex-2);
                this.insertLast(myPanel);
            }
            else if (this.animationDirection = 1) {
            	this.removeAt(activeIndex+2);
               this.insertFirst(myPanel);
            }
    }
});

//Ext.create("ECAT.view.ImageDetailView",{
	// id:'imagedetailview'
//});