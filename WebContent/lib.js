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