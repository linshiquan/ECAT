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
        		id : 'btn_back',
        		xtype : 'button',
        		ui : 'back',
        		top : '30%',
        		left : '5%',
        		cls : 'back',
        		hidden : true,
    			text : '  '
        	},{
        		xtype : 'spacer'
        	},{
        		xtype : 'title',
        		id : 'title_tb',
        		centered : true,
        		cls : 'toptitle',
        		width : '40%',
        		height: 70
        	},{
        		xtype : 'spacer'
        	},{
        		id : 'btn_edit',
        		xtype : 'button',
        		hidden : true,
        		cls : 'black',
        		top : '30%',
        		right : '5%',
        		text : '编辑',
        		handler : function(){
        			var list_img_fav = Ext.getCmp('list_img_fav'),
        				store = list_img_fav.getConfig('store');
        			store.add([ {name: '44',type : 3},
        			     	   {name: '45',type : 3},
        			    	   {name: '46',type : 3},
        			    	   {name: '47',type : 3},
        			    	   {name: '48',type : 3},
        			    	   {name: '73',type : 3},
        			    	   {name: '74',type : 3},
        			    	   {name: '75',type : 3},
        			    	   {name: '76',type : 3},
        			    	   {name: '77',type : 3},
        			    	   {name: '78',type : 3},
        			    	   {name: '79',type : 3},
        			    	   {name: '80',type : 3},
        			    	   {name: '81',type : 3},
        			    	   {name: '82',type : 3},
        			    	   {name: '83',type : 3},
        			    	   {name: '84',type : 3},
        			    	   {name: '100',type : 3},
        			    	   {name: '101',type : 3},
        			    	   {name: '102',type : 3},
        			    	   {name: '103',type : 3},
        			    	   {name: '104',type : 3},
        			    	   {name: '105',type : 3}]);
        			store.sync();
        			list_img_fav.refresh();
        		}
        	}]
    	}]
    },
    setTitle : function(title){
    	Ext.getCmp('title_tb').updateTitle(title);
    },
    toImgListItemize : function(title){
    	var btn_back = Ext.getCmp('btn_back');
    	this.setTitle(title);
    	btn_back.setText('分类');
    	btn_back.setHandler(function(){
    		var list_itemize = Ext.getCmp('list_itemize'),
    		top_bar = Ext.getCmp('top_bar');
    		top_bar.toItemizeList();
    		list_itemize.show({type: 'slide',direction: 'left'});
    	});
    	btn_back.show();
    	Ext.getCmp('btn_edit').hide();
    },
    toItemizeList : function(){
    	this.setTitle('分类选择');
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').hide();
    },
    toImgListAll : function(){
    	this.setTitle('全部('+this.img_total_count+')');
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').hide();
    },
    toFavorite : function(c){
    	var title = '收藏夹';
    	if(c > 0){
    		title += ('('+ c + ')');
    	}
    	this.setTitle(title);
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').show();
    }
});