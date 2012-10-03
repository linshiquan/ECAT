Ext.create('Ext.data.Store', {
    id: 'itemizes',
    fields: ['id','name'],
    proxy: {
        type: 'ajax',
        url : 'data.json',
        reader: {
            type: 'json',
            rootProperty: 'itemizes'
        }
    },
    autoLoad: true
});

Ext.define('ECAT.view.Itemize', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.data.Store'],
    xtype : 'list_itemize',
    config : {
    	id : 'list_itemize',
    	modal : true,
    	top : 90,
	    width: 768,
    	height: 824,
    	scrollable : false,
    	cls : 'touming',
    	store : 'itemizes',
    	itemTpl : '<span>{name}<span>',
	    listeners: {
	        itemtap: function(dv,index,target,record,e,eOpts) {
	        	var topbar = Ext.getCmp('top_bar'),
	        		list_img = Ext.getCmp('list_img'),
	        		store = Ext.getStore(list_img.getConfig('store'));
	        	topbar.setTitle(record.get('name'));
	        	store.filter("type",record.get('id'));
				list_img.refresh();
//	            dv.hide({type: 'slide',direction: 'up'});
	            dv.hide();
	        },
	        show : function(list, eOpts){
	        	var list_img = Ext.getCmp('list_img');
	        	list_img.getScrollable().getScroller().scrollTo(0,0); 
	        }
	        
	    }
    },
});