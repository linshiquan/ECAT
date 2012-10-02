Ext.define('ECAT.store.Imgs', {
	extend: 'Ext.data.Store',
    config: {
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
    }
});

//Ext.create('Ext.data.Store',{
//	id : 'st_img',
//	autoLoad: true,
//    model: 'ECAT.model.Img',
//    proxy: {
//        type: 'ajax',
//        url : 'data.json',
//        reader: {
//            type: 'json',
//            rootProperty: 'imgs'
//        }
//    }
//});

