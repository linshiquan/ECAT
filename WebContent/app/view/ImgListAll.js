Ext.define('ECAT.view.ImgListAll', {
    extend: 'ECAT.view.ImgList',
    requires: ['Ext.data.Store'],
    xtype : 'list_img_all',
    config: {
    	store:	Ext.create('Ext.data.Store',{
    		model: 'ECAT.model.Img',
    		proxy: {
    		    type: 'ajax',
    		    url : 'data.json',
    		    reader: {
    		        type: 'json',
    		        rootProperty: 'imgs'
    		    }
    		},
    		autoLoad: true
    	})
    }
});
