Ext.create('Ext.data.Store', {
    id: 'itemizes',
    fields: ['id','name'],
    data: [
        {src: '10'}, { src: '11'},{src:'118'},
        {src: '119'},{ src: '12'},{src:'120'},
        {src: '121'},{ src: '122'},{src:'123'},
        {src: '142'},{ src: '143'},{src:'144'}
    ]
});

Ext.define("ECAT.view.Itemize", {
    extend: 'Ext.dataview.List',
    config : {
    	id : 'btn_menu',
    	modal : true,
    	store : '',
    	itemTpl : '<span>{}<span>',
    	onItemTap : function(){
    		
    	}
    	
    		
    }
});