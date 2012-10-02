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
    	columnNum:3,
    	layout: {
	        type: 'vbox'
    	},
		items : [{
    		id : 'menu_btn',
    		xtype : 'button',
    		width: 90,
    	    height: 90,
    	    left: '5%',
    	    bottom : 100,
    	    icon : 'resources/images/icons/up_h.png',
//    	    iconAlign : 'center',
    	    iconCls : 'btn_up_icon',
    	    handler : function(){
		    	var menu_btn = Ext.getCmp('menu_btn'),
		    		buttom_bar = Ext.getCmp('buttom_bar'),
		    		top_bar = Ext.getCmp('top_bar');
		    	menu_btn.hide();
	        	buttom_bar.show();
	        	top_bar.show();
    	    }
    	
	    },{
	    	id : 'top_bar',
//	    	xtype : 'container',
	    	xtype : 'panel',
	    	floatingCls : 'c-x-floating',
	    	cls : 'touming',
	    	hidden : true,
	    	width: '100%',
	    	height: 90,
	    	top : 0,
	    	border : 1,
	    	html : '<div align="center" vlign="center"> <h1> 全部 (8)</h1><div>'
	    },{ 
	    	id : 'buttom_bar',
	    	xtype : 'panel',
	    	cls : 'touming',
	    	border : 0,
	    	hidden : true,
	    	width: "100%",
	    	height: 110,
	    	bottom :110,
	    	items  : [{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '5%',
	    	    top : 10,
	    	    icon : 'resources/images/icons/down_h.png',
	    	    iconCls : 'btn_up_icon',
	    	     handler : function(){
	    	    	alert('123');
	    	    }
	    	},{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '25%',
	    	    top : 10,
	    	    icon : 'resources/images/icons/all_h.png',
	    	    iconCls : 'btn_up_icon',
	    	    handler : function(){
	    	    	alert('123');
	    	    }
	    	},{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '45%',
	    	    top : 10,
	    	    icon : 'resources/images/icons/type_h.png',
	    	    iconCls : 'btn_up_icon',
	    	    handler : function(){
	    	    	alert('123');
	    	    }
	    	},{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '65%',
	    	    top : 10,
	    	    icon : 'resources/images/icons/fav_h.png',
	    	    iconCls : 'btn_up_icon',
	    	    handler : function(){
	    	    	alert('123');
	    	    }
	    	},{
	    		xtype : 'button',
	    		width: 90,
    	  		height: 90,
	    	    left: '85%',
	    	    top : 10,
	    	    icon : 'resources/images/icons/link_h.png',
	    	    iconCls : 'btn_up_icon',
	    	    handler : function(){
	    	    	alert('123');
	    	    }
	    	}]
	    }]
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


