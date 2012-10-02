Ext.define("ECAT.view.Main", {
    extend: 'Ext.Panel',
    requires: ['ECAT.view.List','ECAT.view.Itemize','ECAT.store.Imgs'],
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	item : [{
    		xtype : 'list_img',
    		id : '123'
    	}]
    }
});


