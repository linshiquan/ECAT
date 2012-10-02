Ext.define("ECAT.view.ImageDetailView", {
    extend: 'Ext.Panel',
    xtype:'imagedetailview',
    requires: ['Ext.Img'],
    config: {
    	id:'imagedetailview',
    	items : [{
    		xtype:'image',
    		mode:true,
    		id : 'imagedetail'
    	}],
    	fullscreen : true
    }
});

//Ext.create("ECAT.view.ImageDetailView",{
	// id:'imagedetailview'
//});