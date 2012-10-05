Ext.define('ECAT.view.ImgListFav', {
    extend: 'ECAT.view.ImgList',
    requires: ['Ext.data.Store','Ext.data.proxy.LocalStorage'], 
    xtype : 'list_img_fav',
    config: {
    	store: 'store_fav'
    },
    initialize: function() {
    		this.isEdit = false;
    		this.del_imgs = [];
        	this.callParent(arguments);
			
    },
    refreshList : function(){
        this.clearEdit();
    	this.callParent(arguments);
    },
    clearEdit : function(){
		this.del_imgs = [];
    }
});
