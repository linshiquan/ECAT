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
    xtype : 'list_itemize',
    config : {
    	id : 'list_itemize',
    	modal : true,
    	top : 90,
	    width: 768,
    	height: 824,
    	scrollable : false,
    	store : 'itemizes',
    	itemTpl : '<span>{name}<span>'
    },
    listeners: {
        itemtap: function(dv,index,target,record,e,eOpts) {
        	var list_img = Ext.getCmp('list_img_type'),
        		store = list_img.getConfig('store');
        	store.filter("type",record.get('id'));
			list_img.refresh();
            dv.hide();
        }
    }
});