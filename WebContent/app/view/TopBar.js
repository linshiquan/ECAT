Ext.define("ECAT.view.TopBar", {
    extend: 'Ext.Container',
    requires: ['Ext.Spacer','Ext.Title'],
    config : {
    	id : 'top_bar',
    	floatingCls : 'c-x-floating',
    	cls : 'touming',
    	hidden : true,
    	width: '100%',
    	height: 90,
    	top : 0,
    	layout : 'vbox',
    	items : [{
    		xtype : 'container',
    		cls : 'topstrip',
    		width: '100%',
        	height: 20,	
        	border : 5
    	},{
    		xtype : 'container',
    		cls : 'toolbar',
    		width: '100%',
        	height: 70,	
        	border : 5,
        	layout : 'hbox',
        	items : [{
        		xtype : 'button',
        		ui : 'back',
        		hidden : true,
        		top : 10,
        		left : '1%',
        		width: 50,
            	height: 50,
        		text : '返回'
        	},{
        		xtype : 'spacer'
        	},{
        		xtype : 'title',
        		id : 'title_tb',
        		centered : true,
        		cls : 'toptitle',
        		width : '25%',
        		height: 70,	
        		title : '全部(150)' 
        		
        	},{
        		xtype : 'spacer'
        	},{
        		xtype : 'button',
        		ui : 'action',
        		hidden : true,
        		top : 10,
        		right : '1%',
        		width: 50,
            	height: 50,
        		text : '编辑'
        	}]
    	}]
    },
    setTitle : function(title){
    	Ext.getCmp('title_tb').updateTitle(title);
    }
    
});