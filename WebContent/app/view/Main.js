Ext.define("ECAT.view.Main", {
    extend: 'Ext.Panel',
//    requires: [' ECAT.store.Imgs'],
    requires: ['ECAT.view.List','ECAT.view.Itemize','ECAT.store.Imgs'],
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	item : [{
    		xtype : 'list_img',
    		id : '123',
    		store : Ext.create('ECAT.store.Imgs')
    	},{
    		xtype : 'list_itemize'
    	}]
    }
});


