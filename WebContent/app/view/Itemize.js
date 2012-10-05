Ext.define('ECAT.view.Itemize', {
    extend: 'Ext.Container',
    requires: ['ECAT.view.ImgListItemize','ECAT.view.ItemizeList'],
    xtype : 'itemize',
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : false,
    	layout : 'card',
    	items : [{
    		xtype : 'list_img_itemize',
    		id : 'list_img_itemize'
    	},{
    		xtype : 'list_itemize',
    		id : 'list_itemize',
    		hidden : true,
    	}]
    }
});


