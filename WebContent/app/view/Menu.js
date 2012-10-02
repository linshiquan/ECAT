Ext.define("ECAT.view.Menu", {
    extend: 'Ext.Button',
    config : {
    	id : 'btn_menu',
		width: 90,
	    height: 90,
	    left: '5%',
	    bottom : 0,
	    ui : 'plain',
	    icon : 'resources/images/icons/up_h.png',
	    iconCls : 'btn_up_icon',
	    handler : function(){
	    	var btn_menu = Ext.getCmp('btn_menu'),
//	    		btn_all = Ext.getCmp('btn_all'),
	    		buttom_bar = Ext.getCmp('buttom_bar'),
	    		top_bar = Ext.getCmp('top_bar');
	    	btn_menu.hide();
	    	buttom_bar.show();
//	    	btn_all.showBy(buttom_bar, "tl-tr");
	    	top_bar.show();
	    }
    }
});