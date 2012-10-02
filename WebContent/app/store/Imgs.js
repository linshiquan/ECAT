Ext.define('ECAT.store.Imgs', {
	extend: 'Ext.data.Store',

    config: {
        model: 'ECAT.model.Img',
        data: [
           {src: '10'}, { src: '11'},{src:'118'},
           {src: '119'},{ src: '12'},{src:'120'},
           {src: '121'},{ src: '122'},{src:'123'},
           {src: '142'},{ src: '143'},{src:'144'}
       ]
    }
});