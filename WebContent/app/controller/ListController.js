Ext.define('ECAT.controller.ListController', {
    extend: 'Ext.app.Controller',

    config: {
    	refs:{
    		listImgAll : '#list_img_all',
    		listImgItemize : '#list_img_itemize',
    		listImgFav : '#list_img_fav',
    		mainPlan : '#pl_main'
    	},
    	control: {
            '#list_img_all img': {
                tap: 'showImageByAll'
            },
            '#list_img_itemize img': {
                tap: 'showImageByItemize'
            },
            '#list_img_fav img': {
                tap: 'showImageByFav'
            }
        },
        routes: {
        }
    },
    showImage: function(img, list, backText, callback, callbackArgs){
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
		topbar.toImageDetailView(title, backText, list, callback, callbackArgs);

    	Ext.Viewport.animateActiveItem(
	        imageDetailView,  
			{  
			    type: 'slide',  
			    direction: 'left'  
			}
	    ); 
    	
    },
    //opens a new window to show the file
    showImageByAll: function(img) {
     	var list = this.getListImgAll(),
     	    topbar = Ext.getCmp('top_bar');
    	this.showImage(img, list, '全部', topbar.toImgListAll);
    },
      //opens a new window to show the file
    showImageByItemize: function(img) {
     	var list = this.getListImgItemize(),
     		topbar = Ext.getCmp('top_bar'),
     		record = img.config.record,
     		type = record.get('type'),
     		itemizes = Ext.getCmp('list_itemize').getStore(),
     		model = itemizes.findRecord('id', type),
     		name = model.get('name');
    	this.showImage(img, list, name, topbar.toImgListItemize, [name]);
    },
      //opens a new window to show the file
    showImageByFav: function(img) {
    	var list = this.getListImgFav(),
    	 	topbar = Ext.getCmp('top_bar');
    	this.showImage(img, list, '收藏',  topbar.toFavorite);

    }
});
