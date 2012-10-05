Ext.define("ECAT.view.Menu", {
    extend: 'Ext.Button',
    config : {
    	id : 'btn_menu',
		width: 70,
	    height: 80,
	    left: '5%',
	    bottom : 0,
	    ui : 'plain',
	    icon : 'resources/images/icons/up_h.png',
	    iconCls : 'icon-btn-menu',
	    handler : function(){
	    	var btn_menu = Ext.getCmp('btn_menu'),
	    		buttom_bar = Ext.getCmp('buttom_bar'),
	    		top_bar = Ext.getCmp('top_bar');
	    	if(!top_bar){
	    		top_bar = Ext.Viewport.add(Ext.create('ECAT.view.TopBar'));
	    	}
	    	if(!buttom_bar){
	    		buttom_bar = Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
	    	}
	    	btn_menu.hide();
	    	buttom_bar.show();
	    	top_bar.show();
	    	
	    	if(Ext.Viewport.getActiveItem().id === 'favorite'){
	    		Ext.getCmp('list_img_fav').setTop(90);
	    	} else if(Ext.Viewport.getActiveItem().id === 'contactDetailView'){
	 	    	Ext.getCmp('contactDetailView').element.dom.style.top = '90px';
	 	   	}
	    }
    }
});