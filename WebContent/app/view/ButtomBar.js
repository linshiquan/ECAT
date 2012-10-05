Ext.define("ECAT.view.ButtomBar", {
    extend: 'Ext.Container',
    requires: ['Ext.Button','ECAT.view.Itemize','ECAT.view.Favorite'], //'ECAT.view.Main',
    config : { 
    	id : 'buttom_bar',
    	cls : 'touming',
    	hidden : true,
    	width: "100%",
    	height: 110,
    	bottom :0,
    	items  : [{
    		id : 'btn_menu_bar',
    		xtype : 'button',
    		width: 90,
	  		height: 90,
    	    left: '5%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/down_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	 var btn_menu = Ext.getCmp('btn_menu'),
	 	    		buttom_bar = Ext.getCmp('buttom_bar'),
	 	    		top_bar = Ext.getCmp('top_bar');
    	    	btn_menu.show();
	 	    	buttom_bar.hide();
	 	    	top_bar.hide();
    	    }
    	},{
    		xtype : 'button',
    		id : 'btn_all',
    		width: 90,
	  		height: 90,
    	    left: '25%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/all_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	var topbar = Ext.getCmp('top_bar'),
    	    		pl_main = Ext.getCmp('pl_main'),
    	    		list_img = Ext.getCmp('list_img'),
    	    		store = Ext.getStore(list_img.getConfig('store')),
    	    		list_itemize = Ext.getCmp('list_itemize');
    	    	list_itemize.hide();
        		store.clearFilter(true);
        		store.load();
        		list_img.refresh();
        		topbar.toImgListAll();
    	    	Ext.Viewport.setActiveItem(pl_main); 
    	    }
    	},{
    		xtype : 'button',
    		width: 90,
	  		height: 90,
    	    left: '45%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/type_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	var topbar = Ext.getCmp('top_bar'),
    	    		pl_main = Ext.getCmp('pl_main'), 
    	    		list_itemize = Ext.getCmp('list_itemize');
    	    	topbar.toItemizeList();
    	    	Ext.Viewport.setActiveItem(pl_main);
    	    	if(!list_itemize){
    	    		list_itemize = Ext.create('ECAT.view.Itemize',{id : 'list_itemize'});
    	    	}
    	    	list_itemize.show({  
	    			type: 'slide',  
	    			direction: 'up'  
	    		});
	    	}
    	},{
    		xtype : 'button',
    		width: 90,
	  		height: 90,
    	    left: '65%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/fav_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	var topbar = Ext.getCmp('top_bar'),
    	    		list_img_fav = Ext.getCmp('list_img_fav');
    	    	if(!list_img_fav){
    	    		list_img_fav = Ext.create('ECAT.view.Favorite',{id : 'list_img_fav'});
    	    	}
    	    	list_img_fav.isEdit = false;
    	    	topbar.toFavorite();
    	    	Ext.Viewport.setActiveItem(list_img_fav);
    	    }
    	},{
    		xtype : 'button',
    		width: 90,
	  		height: 90,
    	    left: '85%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/link_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
				Ext.Viewport.animateActiveItem(
					Ext.create("ECAT.view.ContactDetailView"),
					{  
				   		type: 'slide',  
						direction: 'left'  
					}
				);
				var btn_menu = Ext.getCmp('btn_menu'),
				buttom_bar = Ext.getCmp('buttom_bar'),
				top_bar = Ext.getCmp('top_bar');
				btn_menu.show();
				buttom_bar.hide();
				top_bar.hide();
    	    }
    	}]
    }
});