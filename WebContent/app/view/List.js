Ext.define('Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['src']
    }
});

Ext.create('Ext.data.Store', {
    id: 'ListStore',
    model: 'Contact',
    data: [
        {src: '10'}, { src: '11'},{src:'118'},
        {src: '119'},{ src: '12'},{src:'120'},
        {src: '121'},{ src: '122'},{src:'123'},
        {src: '142'},{ src: '143'},{src:'144'}
    ]
});
Ext.define('ECAT.view.Image', {
   	extend: 'Ext.Img',
  	xtype : 'ecatviewimage',
    config:{
	    mode:true,
	    height: 512,
	    width: 256
    },
    
    //sets up our tap event listener
    initialize: function() {
        this.callParent(arguments);

        //this.element.on('tap', this.onTap, this);
    }

    //this is called whenever you tap on the image
    /*onTap: function() {alert('as');
       var action = Ext.create('Ext.app.Action', {url: 'view/' + this.getSrc()});
        ECAT.getHistory().add(action,true);
    }*/
});
Ext.define("ECAT.view.ImagePanel", {
    extend: 'Ext.Panel',
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
					var img = Ext.create('ECAT.view.Image', {
					    src: src
					});
					this.add([img]);
			}
    }
});
Ext.define("ECAT.view.List", {
    extend: 'Ext.Panel',
    requires: ['Ext.data.Store', 'Ext.Img', 'Ext.MessageBox'],
    config: {
    	id : 'imagelist',
    	fullscreen : true,
    	scrollable : true,
    	store:'ListStore',
    	layout: {
	        type: 'vbox'
    	}
    },
    initialize: function() {
        	this.callParent(arguments);
			var store = Ext.getStore(this.getConfig('store')),
			records = store.getRange(),
			recordsLn = records.length,
			multiple = recordsLn / 3,
			surplus = recordsLn % 3,
			panel;
			for (var i = 0; i < multiple; i++) {
				var index = i * 3;
				panel = Ext.create('ECAT.view.ImagePanel', {
					img : [records[index].get('src'),records[index + 1].get('src'),records[index + 2].get('src')]
				});
				this.add(panel);
			}
			var start = multiple * 3;
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


