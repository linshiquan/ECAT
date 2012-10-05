Ext.define('ECAT.view.ItemizeList', {
    extend: 'Ext.dataview.List',
    requires: ['Ext.data.Store'],
    xtype : 'list_itemize',
    config : {
    	modal : true,
    	top : 90,
	    width: 768,
    	height: 834,
    	scrollable : false,
    	cls : 'touming',
    	store : Ext.create('Ext.data.Store', {
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
    	}),
    	itemTpl : '<div class="x-list-itemize">{name}</div>',
	    listeners: {
	        itemtap: function(dv,index,target,record,e,eOpts) {
	        	var topbar = Ext.getCmp('top_bar'),
	        		list_img_itemize = Ext.getCmp('list_img_itemize'),
	        		store = list_img_itemize.store,
	    			btn_menu_bar = Ext.getCmp('btn_menu_bar');
	    		btn_menu_bar.enable();
	        	topbar.toImgListItemize(record.get('name'));
	        	store.clearFilter(true);
	        	store.filter("type",record.get('id'));
				list_img_itemize.refreshList();
	            dv.hide();
//	            dv.hide({type: 'slide',direction: 'up'});
	        },
	        show : function(list, eOpts){
	        	var list_img_itemize = Ext.getCmp('list_img_itemize');
	        	list_img_itemize.getScrollable().getScroller().scrollTo(0,0);
	        }
	        
	    }
    }
});