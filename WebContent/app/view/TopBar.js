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
        		id : 'btn_del',
        		xtype : 'button',
        		ui : 'decline',
        		hidden : true,
        		top : '30%',
        		left : '5%',
        		text : '删除',
        		handler : function(){
        			var top_bar =  Ext.getCmp('top_bar');
                    if (!top_bar.delActionSheet) {
                    	top_bar.delActionSheet = Ext.Viewport.add({
                            xtype: 'actionsheet',
                            defaults : {
                            	xtype : 'button'
//                            	margin : '50 50'
                            },
                            items: [{
                                    text: '删除',
                                    ui: 'decline',
                                    scope: top_bar,
                                    handler: function() {
                                    	var top_bar = this,
	                        				list_img_fav = Ext.getCmp('list_img_fav'),
	                        				del_imgs = list_img_fav.del_imgs,
	                        				store = list_img_fav.store,
	                        				index;
	                        			del_imgs.forEach(function(img){
	                        				index = store.find('name', img);
	                        				store.removeAt(index);
	                        			});
	                        			store.sync();
	                        			list_img_fav.refreshList();
	                        			top_bar.setBtnDel();
	                        			
	                        			top_bar.delActionSheet.hide();
                                    }
                                },{
                                    text: '取消',
                                    cls : 'black',
                                    scope: top_bar,
                                    handler: function() {
                                    	var top_bar = this;
                                    	top_bar.delActionSheet.hide();
                                    }
                                }
                            ]
                        });
                    }
                    top_bar.delActionSheet.show();
        		}
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
        		id : 'btn_finish',
        		xtype : 'button',
        		ui : 'action',
        		hidden : true,
        		top : '30%',
        		right : '5%',
        		text : '完成',
        		handler : function(){
        			var list_img_fav = Ext.getCmp('list_img_fav');
						top_bar = Ext.getCmp('top_bar'),
		    			btn_menu_bar = Ext.getCmp('btn_menu_bar');
				    btn_menu_bar.enable();
					list_img_fav.isEdit = false;
	    			top_bar.toFavorite();
        		}
        	},{
        		id : 'btn_edit',
        		xtype : 'button',
        		hidden : true,
        		cls : 'black',
        		top : '30%',
        		right : '5%',
        		text : '编辑',
        		handler : function(){
//        			var list_img_fav = Ext.getCmp('list_img_fav'),
//        				store = list_img_fav.store;
//        			store.add([ {name: '44',type : 3},
//        			     	   {name: '45',type : 3},
//        			    	   {name: '46',type : 3},
//        			    	   {name: '47',type : 3},
//        			    	   {name: '48',type : 3},
//        			    	   {name: '105',type : 3}]);
//        			store.sync();
//        			list_img_fav.refreshList();
        			var list_img_fav = Ext.getCmp('list_img_fav');
	    				top_bar = Ext.getCmp('top_bar'),
	        			btn_menu_bar = Ext.getCmp('btn_menu_bar');
	    		    btn_menu_bar.disable();
	    			list_img_fav.isEdit = true;
	    			top_bar.toFavEdit();
        		}
        	},{
        	    id : 'btn_collect',
        		xtype : 'button',
        		iconCls:'star',
        		iconMask: true,
        		hidden : true,
        		top : '30%',
        		right : '5%',
        		handler : function(){
        			var list_img_fav = Ext.getCmp('list_img_fav'),
        				imageDetailView = Ext.getCmp('imagedetailview'),
        				store = list_img_fav.getStore(),
        				activeModel = imageDetailView.getActiveModel(),
        				className = this.element.dom.className;
    				// 已经被收藏
    				if(className.search('collectactive') != -1){
    					var index = store.find('name', activeModel.get('name'));
    					store.removeAt(index);
    					this.removeCls('collectactive');
    				} else{
    					// 还未被收藏
    					store.add(activeModel.copy());
    					this.addCls('collectactive');
    				}
        			store.sync();
        		}
    		},{
        		id : 'btn_order',
        		xtype : 'button',
        		hidden : true,
        		cls : 'black',
        		top : '30%',
        		right : '5%',
        		text : '订货',
        		handler : function(){
        		}
        	}]
		}]
	},
    initialize: function() {
    	this.callParent(arguments);
    	this.toImgListAll();
    },
    setTitle : function(title){
    	Ext.getCmp('title_tb').updateTitle(title);
    },
    getTitle : function(){
    	return Ext.getCmp('title_tb')._html;
    },
    toImgListItemize : function(title){
    	var btn_back = Ext.getCmp('btn_back');
    	this.setTitle(title);
    	btn_back.setText('分类');
    	btn_back.setHandler(function(){
    		var list_itemize = Ext.getCmp('list_itemize'),
				top_bar = Ext.getCmp('top_bar'),
				btn_menu_bar = Ext.getCmp('btn_menu_bar');
	    	btn_menu_bar.disable();
			top_bar.toItemizeList();
			list_itemize.show({type: 'slide',direction: 'left'});
    	});
    	btn_back.show();
    	Ext.getCmp('btn_edit').hide();
    	Ext.getCmp('btn_del').hide();
    	Ext.getCmp('btn_finish').hide();
    	Ext.getCmp('btn_collect').hide();
    	Ext.getCmp('btn_order').hide();
    },
    toItemizeList : function(){
    	this.setTitle('分类选择');
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').hide();
    	Ext.getCmp('btn_del').hide();
    	Ext.getCmp('btn_finish').hide();
    	Ext.getCmp('btn_collect').hide();
    	Ext.getCmp('btn_order').hide();
    },
    toImgListAll : function(){
    	if(!this.title_list_img_all){
    		var count = Ext.getCmp('list_img_all').store.getCount();
    		this.title_list_img_all = '全部('+count+')';
    	}
    	this.setTitle(this.title_list_img_all);
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').hide();
    	Ext.getCmp('btn_del').hide();
    	Ext.getCmp('btn_finish').hide();
    	Ext.getCmp('btn_collect').hide();
    	Ext.getCmp('btn_order').hide();
    },
    toFavorite : function(){
    	var title = '收藏夹',
    		c = Ext.getCmp('list_img_fav').store.getCount();
    	if(c > 0){
    		title += ('('+ c + ')');
    	}
    	this.setTitle(title);
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').show();
    	Ext.getCmp('btn_del').hide();
    	Ext.getCmp('btn_finish').hide();
    	Ext.getCmp('btn_collect').hide();
    	Ext.getCmp('btn_order').hide();
    },
    toFavEdit : function(){
    	var title = '收藏夹编辑';
    	this.setTitle(title);
    	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').hide();
    	Ext.getCmp('btn_del').show();
    	this.setBtnDel();
    	Ext.getCmp('btn_finish').show();
    	Ext.getCmp('btn_collect').hide();
    	Ext.getCmp('btn_order').hide();
    },
    setBtnDel : function(count){
    	var btn_del = Ext.getCmp('btn_del'),
    		text = '删除';
    	if(count || count > 0){
    		btn_del.setDisabled(false);
    		text += ('('+count+')');
    	}else{
    		btn_del.setDisabled(true);
    	}
    	btn_del.setText(text);
    },
    toImageDetailView : function(title, backText, backList, callback, callbackArgs){
       	this.setTitle(title);
    	var btn_back = Ext.getCmp('btn_back');
   		btn_back.setText(backText);
    	btn_back.setHandler(function(){
	   		//var backListCmp = Ext.getCmp(backListId);
	   		//top_bar = Ext.getCmp('top_bar');
	  		//top_bar.toItemizeList();
	 		Ext.Viewport.animateActiveItem(
		        backList,  
				{  
				    type: 'slide',  
				    direction: 'left'  
				}
	    	);
	    	Ext.defer(callback, 1, Ext.getCmp('top_bar'), callbackArgs);
		});
  		btn_back.show();
  		Ext.getCmp('btn_edit').hide();
 		Ext.getCmp('btn_del').hide();
   		Ext.getCmp('btn_finish').hide();
   		Ext.getCmp('btn_order').hide();
   		
   		var btn_collect = Ext.getCmp('btn_collect');
   		btn_collect.show();
     },
     toContactDetailView : function(){
     	this.setTitle('联系方式');
     	Ext.getCmp('btn_order').show();
     	Ext.getCmp('btn_back').hide();
     	Ext.getCmp('btn_back').hide();
    	Ext.getCmp('btn_edit').hide();
    	Ext.getCmp('btn_del').hide();
    	Ext.getCmp('btn_finish').hide();
    	Ext.getCmp('btn_collect').hide();
     }
});