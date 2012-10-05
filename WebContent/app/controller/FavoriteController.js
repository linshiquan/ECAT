Ext.define('ECAT.controller.FavoriteController', {
    extend: 'Ext.app.Controller',

    config: {
    	refs:{
    		favlist : '#list_img_fav',
    		fav : '#favorite',
    		topb : '#top_bar',
    		listController : {
    			xtype : 'listcontroller',
    			autoCreate: true
    		}
    	},
    	control: {
            '#list_img_fav img': {
                tap: 'doImgTap'
            }
//        },
//        routes: {
        }
    },
    doImgTap : function(img, e, eOpts){
    	if(this.getFavlist().isEdit){ //收藏夹编辑,点击删除图片
    		this.delFav(img);
    	}else{ //收藏夹,点击查看详情
    		this.showImg(img);
    	}
    	
    },
    showImg : function(img){
    	var list = this.getFavlist(),
    	 	topbar = Ext.getCmp('top_bar');
    	ECAT.lib.showImageDetail(img, list.getParent(), list, '收藏',  topbar.toFavorite);
    },
    delFav : function(img){
    	var record = img.config.record,
    		img_name = record.get('name'),
    		del_imgs = this.getFavlist().del_imgs,
    		img_index = del_imgs.indexOf(img_name);
    		
    	if(img_index == -1){
    		del_imgs.push(img_name);
    	}else{
    		del_imgs.splice(img_index, 1);
    	}
    	this.getTopb().setBtnDel(del_imgs.length);
    }
});
