Ext.create('Ext.data.Store', {
    id: 'itemizes',
    fields: ['id','name'],
    data: [
        {id: 1 , name : '男士'},
        {id: 2 , name : '女士'},
        {id: 3 , name : '小孩'},
        {id: 4 , name : '孕妇'}
    ]
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
    }
});