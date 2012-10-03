Ext.define("ECAT.view.Main", {
    extend: 'Ext.Container',
    requires: ['ECAT.view.List','ECAT.view.Itemize'],
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : false,
    	layout : 'card',
    	items : [{
    		xtype : 'list_img',
    		id : 'list_img'
    	},{
    		xtype : 'list_itemize',
    		hidden : true,
    		id : 'list_itemize'
    	}],
    }
});


