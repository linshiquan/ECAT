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
    			return "resources/images/xiao/"+ img_name + ".png";
    		},
    		getDaImgSrc : function(img_name){
    			return "resources/images/da/"+ img_name + ".png";
    		},
    		getIconSrc : function(icon_name){
    			return "resources/images/icons/"+ img_name + ".png";
    		}
    	});
    	
        Ext.Viewport.add(Ext.create('ECAT.view.ImgListAll',{id : 'list_img_all'}));
        Ext.Viewport.add(Ext.create('ECAT.view.TopBar'));
        Ext.Viewport.add(Ext.create('ECAT.view.Menu'));
        Ext.Viewport.add(Ext.create('ECAT.view.ButtomBar'));
    }
});
