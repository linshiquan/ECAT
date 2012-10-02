Ext.define('ECAT.store.Imgs', {
	extend: 'Ext.data.Store',
    config: {
        model: 'ECAT.model.Img',
        data: [
           {name: '10',type : 1}, { name: '11',type : 1},{name:'118',type : 1},
           {name: '119',type : 1},{ name: '12',type : 1},{name:'120',type : 1},
           {name: '121',type : 1},{ name: '122',type : 1},{name:'123',type : 1},
           {name: '142',type : 1},{ name: '143',type : 1},{name:'144',type : 1}
       ]
    }
});