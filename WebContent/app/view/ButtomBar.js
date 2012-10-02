Ext.define("ECAT.view.ButtomBar", {
    extend: 'Ext.Panel',
    requires: ['Ext.Button','ECAT.view.Main',],
    config : { 
    	id : 'buttom_bar',
    	cls : 'touming',
//    	border : 0,
    	hidden : true,
    	width: "100%",
    	height: 110,
    	bottom :0,
    	items  : [{
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
    	    	alert('123');
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
    	    	var aa = Ext.create('ECAT.view.Main');
    	    	Ext.Viewport.setActiveItem(aa);
//    	    	Ext.getCmp('list_itemize').show();
//    	    	Ext.getCmp('imagelist').getScrollable().getScroller().scrollTo(0,0); 
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
    	    	alert('123');
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
    	    	alert('123');
    	    }
    	}]
    }
});