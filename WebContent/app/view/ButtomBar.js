Ext.define("ECAT.view.ButtomBar", {
    extend: 'Ext.Container',
    requires: ['Ext.Button','ECAT.view.Itemize','ECAT.view.Favorite'], //'ECAT.view.Main',
    config : { 
    	id : 'buttom_bar',
    	cls : 'touming',
    	hidden : true,
    	width: "100%",
    	height: 90,
    	bottom :0,
    	items  : [{
    		id : 'btn_menu_bar',
    		xtype : 'button',
    		width: 70,
	  		height: 80,
    	    left: '5%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/down_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	 var btn_menu = Ext.getCmp('btn_menu'),
	 	    		buttom_bar = Ext.getCmp('buttom_bar'),
	 	    		top_bar = Ext.getCmp('top_bar'),
	 	    		list_img_fav = Ext.getCmp('list_img_fav');
    	    	 list_img_fav.setTop(0);
    	    	 btn_menu.show();
	 	    	 buttom_bar.hide();
	 	    	 top_bar.hide();
    	    }
    	},{
    		xtype : 'button',
    		id : 'btn_all',
    		width: 70,
	  		height: 70,
    	    left: '25%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/all_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	if(Ext.Viewport.getActiveItem().id !== 'list_img_all'){
    	    		var topbar = Ext.getCmp('top_bar'),
    	    			list_img_all = Ext.getCmp('list_img_all'),
    	    			btn_menu_bar = Ext.getCmp('btn_menu_bar');
    	    		btn_menu_bar.enable();
    	    		topbar.toImgListAll();
    	    		Ext.Viewport.setActiveItem(list_img_all); 
    	    	}
    	    }
    	},{
    		xtype : 'button',
    		width: 70,
	  		height: 70,
    	    left: '45%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/type_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	if(Ext.Viewport.getActiveItem().id !== 'itemize'){
	    	    	var topbar = Ext.getCmp('top_bar'),
	    	    		itemize = Ext.getCmp('itemize'),
	    	    		btn_menu_bar = Ext.getCmp('btn_menu_bar');
	    	    	if(!itemize){
	    	    		itemize = Ext.create('ECAT.view.Itemize',{id : 'itemize'});
	    	    	}
	    	    	btn_menu_bar.disable();
	    	    	topbar.toItemizeList();
	    	    	Ext.getCmp('list_itemize').hide();
	    	    	Ext.Viewport.setActiveItem(itemize);
	    	    	setTimeout(function(){
	    	    		var list_itemize = Ext.getCmp('list_itemize');
	    	    		list_itemize.show({  
	    	    			type: 'slide',  
	    	    			direction: 'up'  
	    	    		});
	    	    	},500);
    	    	}
	    	}
    	},{
    		xtype : 'button',
    		width: 70,
	  		height: 70,
    	    left: '65%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/fav_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
    	    	if(Ext.Viewport.getActiveItem().id !== 'list_img_fav'){
    	    		var topbar = Ext.getCmp('top_bar'),
    	    			favorite = Ext.getCmp('favorite'),
    	    			btn_menu_bar = Ext.getCmp('btn_menu_bar'),
    	    			list_img_fav;
        	    	btn_menu_bar.enable();
    	    		if(!favorite){
    	    			favorite = Ext.create('ECAT.view.Favorite',{id : 'favorite'});
    	    		}
    	    		list_img_fav = Ext.getCmp('list_img_fav');
    	    		list_img_fav.isEdit = false;
    	    		list_img_fav.setTop(90);
    	    		topbar.toFavorite();
    	    		Ext.Viewport.setActiveItem(favorite);
    	    	}
    	    }
    	},{
    		xtype : 'button',
    		width: 70,
	  		height: 70,
    	    left: '85%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/link_h.png',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
				var topbar = Ext.getCmp('top_bar'),
					contactDetailView = Ext.getCmp('contactDetailView'),
					btn_menu_bar = Ext.getCmp('btn_menu_bar');
				btn_menu_bar.disable();
				topbar.toContactDetailView();
				if(!contactDetailView){
					contactDetailView = Ext.create("ECAT.view.ContactDetailView");
				}
				Ext.Viewport.setActiveItem(contactDetailView);
				/*Ext.Viewport.animateActiveItem(
 					contactDetailView,
 					{  
 			   			type: 'slide',  
 						direction: 'left'  
 					}
				);
				);*/
//				contactDetailView.setTop('90px');
    	    }
    	}]
    }
});