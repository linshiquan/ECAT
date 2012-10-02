//Ext.define("ECAT.view.Main", {
//    extend: 'Ext.Panel',
//    requires: ['ECAT.view.List', 'ECAT.view.Itemize'],
//    config: {
//    	id : 'pl_main',
//    	width: 768,
//    	height: 1024,
//    	layout: {
//	        type: 'card'
//    	},
////    	activeItem : 0,
//    	items : [{
//    		xtype : 'list_img'
//    	},{
//    		xtype : 'list_itemize',
//    		hidden : true
//    	}]
//    }
//});


Ext.create('Ext.data.Store', {
    id: 'aa',
    fields: ['src'],
    data: [
        {src: '10'}, { src: '11'},{src:'118'},
        {src: '119'},{ src: '12'},{src:'120'},
        {src: '121'},{ src: '122'},{src:'123'},
        {src: '142'},{ src: '143'},{src:'144'}
    ]
});
Ext.define("ECAT.view.Main", {
    extend: 'Ext.Panel',
    requires: ['Ext.data.Store', 'Ext.Img', 'Ext.MessageBox'],
    xtype : 'list_img',
    config: {
    	id : 'imagelist',
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	store:'aa',
    	columnNum:3,
    	layout: {
	        type: 'vbox'
    	},
    	item : [{xtype : 'list_itemize'}]
    },
    initialize: function() {
        	this.callParent(arguments);
			var store = Ext.getStore(this.getConfig('store')),
			records = store.getRange(),
			recordsLn = records.length,
			columnNum = this.getConfig('columnNum'),
			multiple = recordsLn / columnNum,
			surplus = recordsLn % columnNum,
			imgSrc = [],
			panel;
			for (var i = 0; i < multiple; i++) {
				var index = i * columnNum;
				imgSrc = [];
				for(var k = 0 ; k < columnNum ; k++){
					imgSrc.push(records[index + k].get('src'));
				}
				panel = Ext.create('ECAT.view.ImagePanel', {
					img : imgSrc
				});
				this.add(panel);
			}
			var start = multiple * columnNum;
			var r = [];
			for (var j = 0 ; j < surplus; j++) {
				var index = start + j;
				r.push(records[index].get('src'));
			}
			panel = Ext.create('ECAT.view.ImagePanel', {
					img : r
				});
			this.add(panel);
    },
    dosomething : function(){
    }
});


