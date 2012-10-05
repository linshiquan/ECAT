Ext.define("ECAT.view.Favorite", {
    extend: 'Ext.Container',
    requires: ['ECAT.view.ImgListFav'], 
    xtype : 'favorite',
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : false,
    	items : [{
    		xtype : 'list_img_fav',
    		id : 'list_img_fav',
    		top : 90
    	}]
    }
});


