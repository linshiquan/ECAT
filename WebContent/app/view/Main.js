Ext.define("ECAT.view.Main", {
    extend: 'Ext.Panel',
    requires: ['ECAT.view.List','ECAT.view.Itemize'],
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : false,
    	items : [{
    		xtype : 'list_img',
    		id : 'list_img_type'
    	},{
    		xtype : 'list_itemize',
    		id : 'list_itemize'
    	}],
    }
});


