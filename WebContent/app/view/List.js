Ext.define("ECAT.view.ImagePanel", {
    extend: 'Ext.Panel',
    requires: ['Ext.Img'],
    config: {
    	img:[],
    	layout: {
	        type: 'hbox'
    	}
    },
    initialize: function() {
        	this.callParent(arguments);
			var records = this.getConfig('img');
			for (var i = 0; i < records.length; i++) {
					var src = "resources/images/xiao/"+ records[i] + ".png";
					var img = Ext.create('Ext.Img', {
						mode:true,
					    height: 512,
					    width: 256,
					    src: src,
					    fileName : records[i]
					});
					this.add([img]);
			}
    }
});

Ext.define("ECAT.view.List", {
    extend: 'Ext.Panel',
    requires: ['ECAT.store.Imgs','Ext.Img','ECAT.view.ImageDetailView'],
    xtype : 'list_img',
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	store:	Ext.create('ECAT.store.Imgs'),
    	columnNum:3,
    	layout: {
	        type: 'vbox'
    	}
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
					imgSrc.push(records[index + k].get('name'));
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
				r.push(records[index].get('name'));
			}
			panel = Ext.create('ECAT.view.ImagePanel', {
					img : r
				});
			this.add(panel);
    },
    dosomething : function(){
    }
});


