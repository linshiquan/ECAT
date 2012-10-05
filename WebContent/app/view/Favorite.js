Ext.define("ECAT.view.Favorite", {
     extend: 'ECAT.view.ImgList',
    requires: ['Ext.data.Store','Ext.data.proxy.LocalStorage'], 
    config: {
    	store:	Ext.create('Ext.data.Store',{
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
    	})
    },
    initialize: function() {
    		this.isEdit = false;
    		this.del_imgs = [];
        	this.callParent(arguments);
			
    },
    refreshList : function(){
        this.del_imgs = [];
    	this.callParent(arguments);
    }
});


