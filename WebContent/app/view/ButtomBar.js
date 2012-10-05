Ext.define("ECAT.view.ButtomBar", {
    extend: 'Ext.Container',
    requires: ['Ext.Button','ECAT.view.Itemize','ECAT.view.Favorite'], //'ECAT.view.Main',
    config : { 
    	id : 'buttom_bar',
    	cls : 'touming toolbar',
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
    	    iconCls : 'icon-btn-menu',
    	    handler : function(){
    	    	 var btn_menu = Ext.getCmp('btn_menu'),
	 	    		buttom_bar = Ext.getCmp('buttom_bar'),
	 	    		top_bar = Ext.getCmp('top_bar');
    	    	 btn_menu.show();
	 	    	 buttom_bar.hide();
	 	    	 top_bar.hide();
	 	    	 if(Ext.Viewport.getActiveItem().id === 'favorite'){
	 	    		 Ext.getCmp('list_img_fav').setTop(0);
	 	    	 } else if(Ext.Viewport.getActiveItem().id === 'contactDetailView'){
	 	    	 	Ext.getCmp('contactDetailView').element.dom.style.top = '0px';
	 	    	 }
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
    	    iconCls : 'icon-btn-bar',
    	    handler : function(){
    	    	if(Ext.Viewport.getActiveItem().id !== 'list_img_all'){
    	    		var topbar = Ext.getCmp('top_bar'),
    	    			buttom_bar = Ext.getCmp('buttom_bar'),
    	    			list_img_all = Ext.getCmp('list_img_all'),
    	    			btn_menu_bar = Ext.getCmp('btn_menu_bar');
    	    		buttom_bar.setBtn('btn_all');
    	    		btn_menu_bar.enable();
    	    		topbar.toImgListAll();
    	    		Ext.Viewport.setActiveItem(list_img_all); 
    	    	}
    	    }
    	},{
    		xtype : 'button',
    		id : 'btn_itemize',
    		width: 70,
	  		height: 70,
    	    left: '45%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/itemize.png',
    	    iconCls : 'icon-btn-bar',
    	    handler : function(){
    	    	if(Ext.Viewport.getActiveItem().id !== 'itemize'){
	    	    	var topbar = Ext.getCmp('top_bar'),
	    	    		buttom_bar = Ext.getCmp('buttom_bar'),
	    	    		itemize = Ext.getCmp('itemize'),
	    	    		btn_menu_bar = Ext.getCmp('btn_menu_bar');
	    	    	buttom_bar.setBtn('btn_itemize');
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
	    	    	},20);
    	    	}
	    	}
    	},{
    		xtype : 'button',
    		id : 'btn_fav',
    		width: 70,
	  		height: 70,
    	    left: '65%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/fav.png',
    	    iconCls : 'icon-btn-bar',
    	    handler : function(){
    	    	if(Ext.Viewport.getActiveItem().id !== 'list_img_fav'){
    	    		var topbar = Ext.getCmp('top_bar'),
    	    			buttom_bar = Ext.getCmp('buttom_bar'),
    	    			favorite = Ext.getCmp('favorite'),
    	    			btn_menu_bar = Ext.getCmp('btn_menu_bar'),
    	    			list_img_fav;
    	    		buttom_bar.setBtn('btn_fav');
        	    	btn_menu_bar.enable();
    	    		if(!favorite){
    	    			favorite = Ext.create('ECAT.view.Favorite',{id : 'favorite'});
    	    		}
    	    		list_img_fav = Ext.getCmp('list_img_fav');
    	    		list_img_fav.isEdit = false;
    	    		list_img_fav.clearEdit();
    	    		list_img_fav.setTop(90);
    	    		topbar.toFavorite();
    	    		Ext.Viewport.setActiveItem(favorite);
    	    	}
    	    }
    	},{
    		xtype : 'button',
    		id : 'btn_link',
    		width: 70,
	  		height: 70,
    	    left: '85%',
    	    top : 10,
    	    ui : 'plain',
    	    icon : 'resources/images/icons/link.png',
    	    iconCls : 'icon-btn-bar',
    	    handler : function(){
				var topbar = Ext.getCmp('top_bar'),
					buttom_bar = Ext.getCmp('buttom_bar'),
					contactDetailView = Ext.getCmp('contactDetailView'),
					btn_menu_bar = Ext.getCmp('btn_menu_bar');
				buttom_bar.setBtn('btn_link');
				btn_menu_bar.enable();
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
				contactDetailView.element.dom.style.top = '90px';
    	    }
    	},{
    		xtype : 'container',
    		id : 'jiantou',
    		cls : 'jiantou',
    		left : '25%',
    		bottom : 0,
	    	width: 70,
	  		height: 10
    	}]
    },
    setBtn : function(btnId){
    	var jiantou = Ext.getCmp('jiantou');
    	this.setBtnIcon(btnId);
    	switch(btnId){
	    	case 'btn_all' :
	    		jiantou.setLeft('25%');
				break;
			case 'btn_itemize' : 
				jiantou.setLeft('45%');
				break;
			case 'btn_fav' : 
				jiantou.setLeft('65%');
				break;
			case 'btn_link' : 
				jiantou.setLeft('85%');
				break;
    	};
    },
    setBtnIcon : function(btnId){
    	var btn_all = Ext.getCmp('btn_all'),
    		btn_itemize = Ext.getCmp('btn_itemize'),
    		btn_fav = Ext.getCmp('btn_fav'),
    		btn_link = Ext.getCmp('btn_link');
    	if(btnId === 'btn_all'){
    		btn_all.setIcon(ECAT.lib.getIconSrc('all_h'));
    	}else{
    		btn_all.setIcon(ECAT.lib.getIconSrc('all'));
    	}
    	if(btnId === 'btn_itemize'){
    		btn_itemize.setIcon(ECAT.lib.getIconSrc('itemize_h'));
    	}else{
    		btn_itemize.setIcon(ECAT.lib.getIconSrc('itemize'));
    	}
    	if(btnId === 'btn_fav'){
    		btn_fav.setIcon(ECAT.lib.getIconSrc('fav_h'));
    	}else{
    		btn_fav.setIcon(ECAT.lib.getIconSrc('fav'));
    	}
    	if(btnId === 'btn_link'){
    		btn_link.setIcon(ECAT.lib.getIconSrc('link_h'));
    	}else{
    		btn_link.setIcon(ECAT.lib.getIconSrc('link'));
    	}
    }
});