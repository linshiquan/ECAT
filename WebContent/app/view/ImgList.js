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

Ext.define("ECAT.view.ImgList", {
    extend: 'Ext.Container',
    requires: ['Ext.Img'],
    xtype : 'list_img',
    config: {
    	width: 768,
    	height: 1024,
    	scrollable : 'vertical',
    	store:	Ext.create('ECAT.store.Imgs'),
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
			for (var i = 0; i < recordsLn; i++) {
				this.add({
					xtype : 'container',
					layout: 'hbox',
					defaults: {
						xtype: 'img',
						mode:true,
					    height: 512,
					    width: 256,
		            },
			    	items : [{
			    		fileName: records[index + k].get('name'),
			    		src : "resources/images/xiao/"+ records[index + k].get('name') + ".png"
			    		
			    	},{
			    		fileName: records[index + k].get('name'),
			    		src : "resources/images/xiao/"+ records[index + k].get('name') + ".png"
			    	},{
			    		fileName: records[index + k].get('name'),
			    		src : "resources/images/xiao/"+ records[index + k].get('name') + ".png"
			    	}]
				});
			}
    },
    dosomething : function(){
    }
});


