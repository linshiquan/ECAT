Ext.define('Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['fsrc', 'ssrc','tsrc']
    }
});

Ext.create('Ext.data.Store', {
    id: 'ListStore',
    model: 'Contact',
    data: [
        {fsrc: '10', ssrc: '11',tsrc:'118'},
        {fsrc: '119', ssrc: '12',tsrc:'120'},
        {fsrc: '121', ssrc: '122',tsrc:'123'},
        {fsrc: '142', ssrc: '143',tsrc:'144'}
    ]
});

Ext.define("ECAT.view.All", {
    extend: 'Ext.Panel',
    config: {
    	id : 'testpanel',
    	items : [{
    	    width: 768,
    	    height: 1024,
    	    xtype: 'list',
    	    store: 'ListStore',
    	    itemTpl: '<table width="768" height="512"><tr>'
    	    	+'<td wight="33%"><div onclick="Ext.getCmp(\'testpanel\').dosomething();"><img src="resources/images/xiao/{fsrc}.png" width="256" height="512"></img></div></td>'
    	    	+'<td wight="33%"><div onclick="Ext.getCmp(\'testpanel\').dosomething();"><img src="resources/images/xiao/{ssrc}.png" width="256" height="512"></img></div></td>'
    	    	+'<td wight="33%"><div onclick="Ext.getCmp(\'testpanel\').dosomething();"><img src="resources/images/xiao/{tsrc}.png" width="256" height="512"></img></div></td>'
    	    	+'</tr></table>'
    	    	
    	},{
    		id : 'menu_btn',
    		xtype : 'button',
    		width: 90,
    	    height: 90,
    	    left: '5%',
    	    bottom : 100,
    	    icon : 'resources/images/icons/up_h.png',
//    	    iconAlign : 'center',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
		    	var menu_btn = Ext.getCmp('menu_btn'),
		    		buttom_bar = Ext.getCmp('buttom_bar'),
		    		top_bar = Ext.getCmp('top_bar');
		    	menu_btn.hide();
	        	buttom_bar.show();
	        	top_bar.show();
    	    }
    	
	    },{
	    	id : 'top_bar',
//	    	xtype : 'container',
	    	xtype : 'panel',
	    	floatingCls : 'c-x-floating',
	    	cls : 'touming',
	    	hidden : true,
	    	width: '100%',
	    	height: 90,
	    	top : 0,
	    	border : 1,
	    	html : '<div align="center" vlign="center"> <h1> 全部 (8)</h1><div>'
	    },{ 
	    	id : 'buttom_bar',
	    	xtype : 'panel',
	    	cls : 'touming',
	    	border : 0,
	    	hidden : true,
	    	width: "100%",
	    	height: 110,
	    	bottom :110,
	    	items  : [{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '5%',
	    	    top : 10,
	    	    icon : 'resources/images/icons/down_h.png',
	    	    iconCls : 'btn_up_icon',
	    	     handler : function(){
	    	    	alert('123');
	    	    }
	    	},{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '25%',
	    	    top : 10,
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
	    	    icon : 'resources/images/icons/type_h.png',
	    	    iconCls : 'btn_up_icon',
	    	    handler : function(){
	    	    	alert('123');
	    	    }
	    	},{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '65%',
	    	    top : 10,
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
	    	    icon : 'resources/images/icons/link_h.png',
	    	    iconCls : 'btn_up_icon',
	    	    handler : function(){
	    	    	alert('123');
	    	    }
	    	}]
	    }]
    },
    dosomething : function(){
    }
});


