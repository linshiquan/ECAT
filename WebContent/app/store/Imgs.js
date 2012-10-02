Ext.define('ECAT.store.Imgs', {
	autoLoad: true,
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
        }
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

