Ext.define('ECAT.controller.FavoriteController', {
    extend: 'Ext.app.Controller',

    config: {
    	refs:{
    		fav : '#list_img_fav',
    		topb : '#top_bar'
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
    	if(this.getFav().isEdit){ //收藏夹编辑,点击删除图片
    		this.delFav(img);
    	}else{ //收藏夹,点击查看详情
    		this.showImg(img);
    	}
    	
    },
    showImg : function(img){
    	alert('正在开发中');
    },
    delFav : function(img){
    	var img_name = img.config.fileName,
    		del_imgs = this.getFav().del_imgs,
    		img_index = del_imgs.indexOf(img_name);
    		
    	if(img_index == -1){
    		del_imgs.push(img_name);
    	}else{
    		del_imgs.splice(img_index, 1);
    	}
    	this.getTopb().setBtnDel(del_imgs.length);
    }
});
