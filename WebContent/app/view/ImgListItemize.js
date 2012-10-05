Ext.define('ECAT.view.ImgListItemize', {
    extend: 'ECAT.view.ImgList',
    requires: ['Ext.data.Store'],
    xtype : 'list_img_itemize',
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
    		filters: [{
               property: 'type',
               value   : 1
    		}],
    		autoLoad: true
    	})
    }
});
