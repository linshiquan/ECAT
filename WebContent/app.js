Ext.application({
    name: 'ECAT',
    models: ['Img'],
    stores: ['Imgs'],
    controllers: ['ListController','FavoriteController'],
    views: ['ImgListAll','Menu','TopBar','ButtomBar'],
    launch: function() {
    	Ext.ns('ECAT.lib');
    	Ext.applyIf(ECAT.lib,{
    		getXiaoImgSrc : function(img_name){
    			return "resources/images/xiao/"+ img_name + ".jpg";
    		},
    		getDaImgSrc : function(img_name){
    			return "resources/images/da/"+ img_name + ".jpg";
    		},
    		getIconSrc : function(icon_name){
    			return "resources/images/icons/"+ icon_name + ".png";
    		},
    		showImageDetail: function(img, panel, list, backText, callback, callbackArgs){
		    	var record = img.config.record,
		    		store = Ext.getStore(list.getConfig('store')),
		    		currentIndex = store.find('name', record.get('name'));
		    		
		    	var imageDetailView = Ext.getCmp('imagedetailview');
		    	if(!imageDetailView){
		    		imageDetailView = Ext.create('ECAT.view.ImageDetailView',{});
		    	}
		    	imageDetailView.setCurrentImageSrc(store, currentIndex);
		    	
		    	// 这是标题栏
		    	var topbar = Ext.getCmp('top_bar'),
		    		title = (currentIndex + 1) + '/' + store.getCount();
				topbar.toImageDetailView(title, backText, panel, callback, callbackArgs);
		
		    	Ext.Viewport.animateActiveItem(
			        imageDetailView,  
					{  
					    type: 'slide',  
					    direction: 'left'  
					}
			    ); 
		    	
		    }
    	});
    	
        Ext.Viewport.add(Ext.create('ECAT.view.ImgListAll',{id : 'list_img_all'}));
        Ext.Viewport.add(Ext.create('ECAT.view.Menu'));
        Ext.Viewport.add(Ext.create('ECAT.view.TopBar'));
//        Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
//        Ext.create('ECAT.view.Favorite',{id : 'list_img_fav'});
        
        //异步加载其他组件
        setTimeout(function(){
        	Ext.create('Ext.data.Store',{
	     		id : 'store_fav',
	     		model: 'ECAT.model.Img',
	     		proxy: {
	     			type: 'localstorage',
	     			id  : 'favorite',
	     		    reader: {
	     		        type: 'json'
	     		    }
	     		},
	     		autoLoad: true
	     	});
        
        },2);
    }
});
