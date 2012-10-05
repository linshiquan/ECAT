Ext.define('ECAT.controller.ListController', {
    extend: 'Ext.app.Controller',
    requires: ['ECAT.view.ImageDetailView'],
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
//            },
//            '#list_img_fav img': {
//                tap: 'showImageByFav'
            }
        },
        routes: {
        }
    },
    //opens a new window to show the file
    showImageByAll: function(img) {
     	var list = this.getListImgAll(),
     	    topbar = Ext.getCmp('top_bar');
    	ECAT.lib.showImageDetail(img, list, list, '全部', topbar.toImgListAll);
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
    	ECAT.lib.showImageDetail(img, list.getParent(), list, name, topbar.toImgListItemize, [name]);
    },
      //opens a new window to show the file
    showImageByFav: function(img) {
    	var list = this.getListImgFav(),
    	 	topbar = Ext.getCmp('top_bar');
    	ECAT.lib.showImageDetail(img, list.getParent(), list, '收藏',  topbar.toFavorite);
    }
});
